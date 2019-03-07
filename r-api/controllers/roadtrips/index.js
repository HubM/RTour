const logger = require("../../services/logger");

module.exports.getRoadtrips = (req, res) => {
  global.dbRtour.collection("roadtrips").find((errorRoadtrips, roadtrips) => {
    if (errorRoadtrips) {
      logger.error("Error on GET roadtrips", errorRoadtrips);
      res.send("Error with GET Roadtrips request");
    } else {
      logger.info(`I send ${roadtrips.length} roadtrips`);
      res.send(roadtrips);
    }
  });
};
