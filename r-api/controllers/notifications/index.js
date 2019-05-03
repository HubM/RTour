const { Expo } = require('expo-server-sdk');
const ObjectId = require("mongojs").ObjectID;

const logger = require("../../services/logger");



module.exports.getDeviceToken = (req, res) => {
  const { token, user } = req.body;

  global.dbRtour.collection("users").update({ "_id": ObjectId(user) }, {
    $set: {
      deviceToken: token
    }
  }, (errorUser, user) => {
    if (errorUser) {
      logger.error("Error on POST Notifs token", errorUser);
      res.status(400).send("Error on POST Notifs token request");
    } else {
      res.send(user);
    }
  });

};

module.exports.testConnection = (req, res) => {
  const userTestDeviceNumber = "5c94f5b5392a9e0687d0dd34";

  global.dbRtour.collection("users").findOne({ _id: ObjectId(userTestDeviceNumber) }, (errorUser, user) => {
    const { deviceToken } = user;
    let expo = new Expo();

    if (!Expo.isExpoPushToken(deviceToken)) {
      console.error(`Push token ${deviceToken} is not a valid Expo push token`);
    }

    const message = [{
      to: deviceToken,
      sound: "default",
      body: "TESTTTT",
      data: {
        hello: "hello"
      }
    }];

    let chunks = expo.chunkPushNotifications(message);


    (async () => {
      for (let chunk of chunks) {
        try {
          let receipts = await expo.sendPushNotificationsAsync(chunk);
          logger.info(receipts);
        } catch (error) {
          logger.error(error);
        }
      }
    })();


  })

};