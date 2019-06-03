const logger = require("../../services/logger");
const ObjectId = require("mongojs").ObjectID;

const { sendNotification } = require('../../services/notifications');

module.exports.getRoadtripById = (req, res) => {
  const { roadtripId } = req.query;

  global.dbRtour.collection("roadtrips").findOne({ _id: ObjectId(roadtripId) }, (errorRoadtrip, roadtrip) => {
    if (errorRoadtrip) {
      logger.error("Error on GET roadtrip by id", errorRoadtrip)
      res.send("Error with GET roadtrip by id request");
    } else {
      logger.info(`I've get the roadtrip with the id (${roadtripId})`)
      res.send(roadtrip);
    }
  })

}


module.exports.registerRoadtrip = (req, res) => {
  const { roadtrip } = req.body;
  const { owner } = roadtrip;

  global.dbRtour.collection("roadtrips").insert(roadtrip, (errorNewRoadtrip, newRoadtrip) => {
    if (errorNewRoadtrip) {
      logger.error("Error on POST roadtrip", errorNewRoadtrip);
      res.send("Error with POST Roadtrip request");
    } else {
      logger.info(`I've insert a new roadtrip created by ${owner.username}`);
      res.send(newRoadtrip);
    }
  });
};

module.exports.deleteRoadtrip = (req, res) => {
  const { id } = req.body;
  

  global.dbRtour.collection("roadtrips").findOne({ _id: ObjectId(id) }, (errorGetRoadtrip, roadtrip) => {
    if (roadtrip.riders) {
      roadtrip.riders.forEach(rider => {
        global.dbRtour.collection('users').findOne({ _id: ObjectId(rider._id)}, (errorRider, riderTarget) => {
          sendNotification(riderTarget.deviceToken, {
            body: "Roadtrip from to has been deleted 😪"   
          })
        })
      })
    }

    global.dbRtour.collection("roadtrips").remove({ _id: ObjectId(id) }, (errorDeleteRoadtrip, deleteRoadtrip) => {
      if (errorDeleteRoadtrip) {
        logger.error("Error on POST roadtrip", errorDeleteRoadtrip);
        res.send("Error on POST Roadtrip request");
      } else {
        logger.info(`I've delete the roadtrip ${id} (${deleteRoadtrip})`);
        res.send(deleteRoadtrip);
      }
    });

  })
};

module.exports.addRiderToRoadtrip = (req, res) => {
  const { roadtripId, rider } = req.body;

  // 1 - Recupérer de req.body uniquement l'id
  // 2 - Faire une première requête qui récupère le user à partir du riderId
  // 3 - Faire la requête de MAJ du roadtrip pour ajouter le rider
  // 4 - Faire une requête pour récupérer le roadtrip
  // 4 - Envoyer le push au owner du trip pour le prévenir de l'ajout d'un rider


  global.dbRtour.collection("roadtrips").update({ _id: ObjectId(roadtripId) }, {
    $addToSet: {
      riders: {
        ...rider,
        isValidated: false
      }
    }
  }, (errorAddingRiderToRoadtrip, addingRiderToRoadtrip) => {
    if (errorAddingRiderToRoadtrip) {
      logger.error('Error on PUT Roadtrip (adding rider)', errorAddingRiderToRoadtrip);
      res.send('Error on PUT Roadtrip (adding rider)', errorAddingRiderToRoadtrip);
    } else {
      logger.info(`I have added the rider ${rider.username} to the trip ${roadtripId}`);


      global.dbRtour.collection("roadtrips").findOne({ _id: ObjectId(roadtripId) }, (errorGetRoadtripInfos, roadtripInfos) => {
        if (errorGetRoadtripInfos) {
          logger.error('Error while getting info roadtrip')
        } else {
          sendNotification(rider.deviceToken, {
            body: `${rider.username} would like to join your trip 🤘`,
            data: {
              type: "roadtrip/join",
              rider,
              roadtripId: roadtripInfos._id
            }
          });
        }
      })



      //  {

      // })

      res.send(addingRiderToRoadtrip);
    }
  })
}

module.exports.refusedOrCanceledRiderToRoadtrip = (req, res) => {
  const { userId, deviceToken, roadtripId, type } = req.body;
  console.log(req.body)
  global.dbRtour.collection('roadtrips').update(
    {
      "_id": ObjectId(roadtripId),
    },
    {
      $pull: {
        "riders": {
          "_id": userId
        }
      }
    },
    (errorFindRoadtrip, roadtrip) => {
      if (errorFindRoadtrip) {
        if (type === "refused") {
          logger.error("Error on REFUSE rider to roadtrip", errorFindRoadtrip);
          res.send("Error on REFUSE rider to roadtrip", errorFindRoadtrip);
        } else {
          logger.error("Error on CANCELED rider to roadtrip");
          res.send("Error on CANCELED rider to roadtrip", errorFindRoadtrip);
        }
      } else {
        if (type === "refused") {
          logger.info(`The rider ${userId} has been refused for the trip ${roadtripId}`);
          
          global.dbRtour.collection('users').findOne({ "_id": ObjectId(userId)}, (errorUser, user) => {
            if(errorUser) {
              logger.error(errorUser);
            } else {
              sendNotification(deviceToken, {
                body: `The creator of the roadtrip has refused your request 😥`
              })
            }
          })


        } else {
          logger.info(`The rider ${userIdg} has canceled the trip ${roadtripId}`);
          

          global.dbRtour.collection('roadtrips').findOne({ "_id": ObjectId(roadtripId), }, (errorRoadtrip, roadtrip) => {
            if(errorRoadtrip) {
              logger.error(errorRoadtrip)
            } else {
              sendNotification(deviceToken, {
                body: `A user has cancel your trip 😥`
              })
            }
          })

        }
        res.send(roadtrip);
      }
    })
}


module.exports.acceptedRiderToRoadtrip = (req, res) => {
  const { userId, roadtripId } = req.body;

  global.dbRtour.collection('roadtrips').update(
    {
      "_id": ObjectId(roadtripId),
      "riders._id": userId
    },
    {
      $set: {
        "riders.$.isValidated": true
      }
    },
    (errorAcceptRider, acceptRider) => {
      if (errorAcceptRider) {
        logger.error("Error on ACCEPT rider to roadtrip");
        res.send("Error on ACCEPT rider to roadtrip", errorAcceptRider);
      } else {
        logger.info(`The rider ${userId} has been accepted for the trip ${roadtripId}`);


        global.dbRtour.collection('users').findOne({ "_id": ObjectId(userId), }, (errorUser, user) => {
          if(errorUser) {
            logger.error(errorUser)
          } else {
            sendNotification(user.deviceToken, {
              body: `Your request for the roadtrip has been accepted 🙌`
            })
          }
        })

        res.send(acceptRider);
      }
    }
  )
}