const logger = require("../../services/logger");
const ObjectId = require("mongojs").ObjectID;

module.exports.getUserById = (req, res) => {
  const { id } = req.query;
  global.dbRtour.collection("users").findOne({ _id: ObjectId(id) }, (errorUser, user) => {
    if (errorUser) {
      logger.error("Error on GET user", errorUser);
      res.status(404).send("Error with GET user request");
    } else {
      res.status(200).send(user);
    }
  });
};
