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

  global.dbRtour.collection("roadtrips").remove({ _id: ObjectId(id) }, (errorDeleteRoadtrip, deleteRoadtrip) => {
    if (errorDeleteRoadtrip) {
      logger.error("Error on POST roadtrip", errorDeleteRoadtrip);
      res.send("Error on POST Roadtrip request");
    } else {
      logger.info(`I've delete the roadtrip ${id} (${deleteRoadtrip})`);
      res.send(deleteRoadtrip);
    }
  });
};

module.exports.addRiderToRoadtrip = (req, res) => {
  const { roadtripId, rider } = req.body;

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

      // global.dbRtour.collection("roadtrips").findOne({ _id: ObjectId(roadtripId) }, (errorGetRoadtripInfos, getRoadtripInfos) => {
      //   if (errorGetRoadtripInfos) {
      //     logger.error('Error while getting info roadtrip')
      //   }
      // })
      // sendNotification()

      res.send(addingRiderToRoadtrip);
    }
  })
}

module.exports.refusedOrCanceledRiderToRoadtrip = (req, res) => {
  const { userId, roadtripId, type } = req.body;

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
          res.send(roadtrip);
        } else {
          logger.info(`The rider ${userId} has canceled the trip ${roadtripId}`);
          res.send(roadtrip);
        }
      }
    })
}


module.exports.acceptedRiderToRoadtrip = (req, res) => {
  const { userId, roadtripId } = req.body;

  logger.debug(`IM GOING TO UPDATE THE TRIP ${roadtripId} AND VALIDATE THE RIDER ${userId}`)

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
        res.send(acceptRider);
      }
    }
  )
}