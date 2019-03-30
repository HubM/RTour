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


module.exports.getRoadtripsByUserName = (req, res) => {
  const { username } = req.query;

  global.dbRtour.collection('roadtrips').find({ "owner.username": username }, (errorRoadtrips, roadtrips) => {
    if (errorRoadtrips) {
      logger.error("Error with GET Roadtrips by username request");
      res.status(400).send(errorRoadtrips)
    } else {
      res.send(roadtrips)
    }
  })
}
