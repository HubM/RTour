const logger = require("../../services/logger");
const ObjectId = require("mongojs").ObjectID;

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
      res.send(addingRiderToRoadtrip);
    }
  })
}

module.exports.refuseRiderToRoadtrip = (req, res) => {
  const { userId, roadtripId } = req.body;

  console.log(req.body);

  global.dbRtour.collection('roadtrips').update(
    { _id: ObjectId(roadtripId) },
    {
      $unset: {
        riders: {
          _id: userId
        }
      }
    },
    { multi: true },
    (errorFindRoadtrip, roadtrip) => {
      if (errorFindRoadtrip) {
        logger.error("Error on REFUSE rider to roadtrip");
        res.send("Error on REFUSE rider to roadtrip");
      } else {
        logger.info(`The rider ${userId} has been refused for the trip ${roadtripId}`);
        res.send(roadtrip);
      }
    })
}