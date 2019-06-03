const { Expo } = require('expo-server-sdk');
const logger = require('../logger');

module.exports.sendNotification = (deviceToken, body) => {
  return new Promise((resolve, reject) => {
    let expo = new Expo();

    if (!Expo.isExpoPushToken(deviceToken)) {
      logger.error(`Push token ${deviceToken} is not a valid Expo push token`);
      reject();
    }

    const message = [{
      to: deviceToken,
      sound: 'default',
      body: 'This is a test notification',
      data: { withSome: 'data' },
      ...body,
    }];

    let chunks = expo.chunkPushNotifications(message);

    (async () => {
      for (let chunk of chunks) {
        try {
          let receipts = await expo.sendPushNotificationsAsync(chunk);
          resolve(receipts)
        } catch (error) {
          reject(error);
        }
      }
    })();
  });
}