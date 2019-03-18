const logger = require("../../services/logger");

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