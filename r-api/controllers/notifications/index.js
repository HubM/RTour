
const ObjectId = require("mongojs").ObjectID;
const logger = require("../../services/logger");
const { sendNotification } = require('../../services/notifications');

module.exports.getDeviceToken = (req, res) => {
  const { token, user } = req.body;

  global.dbRtour.collection("users").update({ "_id": ObjectId(user.id) }, {
    $set: {
      deviceToken: token
    }
  }, (errorUser, user) => {
    if (errorUser) {
      logger.error("Error on POST Notifs token", errorUser);
      res.status(400).send("Error on POST Notifs token request");
    } else {

      sendNotification(token, {
        body: `Welcome back ${req.body.user.username} ! 🙌`
      })
      res.status(200).send(user);
    }
  });
};