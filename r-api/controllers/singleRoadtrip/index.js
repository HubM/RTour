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
      res.send("Error with POST Roadtrip request");
    } else {
      logger.info(`I've delete the roadtrip ${id} (${deleteRoadtrip})`);
      res.send(deleteRoadtrip);
    }
  });
};
