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

module.exports.getUserByUsernameOrEmail = (req, res) => {
  const { user } = req.body;

  global.dbRtour.collection("users").findOne({
    $or: [
      { "username": user },
      { "email": user },
    ]
  }, (errorUser, user) => {
    if (errorUser) {
      logger.error("Error on POST get user by username or email", errorUser)
      res.status(404).send("Error on POST get user by username or email", errorUser)
    } else {
      res.status(200).send(user);
    }
  })
}