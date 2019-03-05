const mongojs = require("mongojs");
const { mongoConnectionString } = require('./settings');

module.exports.connectDb = () =>
  new Promise((resolve, reject) => {
    global.dbRtour = mongojs(mongoConnectionString);

    global.dbRtour.on("connect", () => {
      resolve();
    });

    global.dbRtour.on("error", err => {
      reject(err);
    });
  });

