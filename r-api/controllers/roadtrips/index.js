const logger = require("../../services/logger");

module.exports.getRoadtripsByDate = (req, res) => {
  const { date } = req.query;

  global.dbRtour.collection("roadtrips").find({ "calendar.startingDate": date }, (errorRoadtrips, roadtrips) => {
    if (errorRoadtrips) {
      logger.error("Error on GET roadtrips", errorRoadtrips);
      res.status(400).send("Error with GET Roadtrips by date request");
    } else {
      res.send(roadtrips);
    }
  });
};

module.exports.getRoadtripsByUser = (req, res) => {
  const { id } = req.query;

  global.dbRtour.collection("roadtrips").find({ "owner._id": id }, (errorRoadtrips, roadtrips) => {
    if (errorRoadtrips) {
      logger.error("Error with GET Roadtrips by user request");
      res.status(400).send(errorRoadtrips);
    } else {
      logger.info(`user with id = ${id} has ${roadtrips.length} roadtrips`);
      res.send(roadtrips);
    }
  });
};
