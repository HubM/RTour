const logger = require("../../services/logger");

module.exports.getUserById = (req, res) => {
  const { id } = req.query;

  global.dbRtour.collection("users").findOne({ _id: id }, (errorUser, user) => {
    if (errorUser) {
      logger.error("Error on GET user", errorUser);
      res.status(404).send("Error with GET user request");
    } else {
      logger.info(`Sending infos for user ${user.username}`);
      res.status(200).send(user);
    }
  });
};
