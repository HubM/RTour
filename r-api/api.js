const api = require("express").Router();

const notificationsController = require("./controllers/notifications");
const roadtripsController = require("./controllers/roadtrips");
const singleRoadtripController = require("./controllers/singleRoadtrip");
const userController = require("./controllers/user");

/* Notifications */
api.post("/registerPushs", notificationsController.getDeviceToken);
api.get("/test", notificationsController.testConnection)
/* List Roadtrips */
api.get("/roadtrips/byDate", roadtripsController.getRoadtripsByDate);
api.get("/roadtrips/byUser", roadtripsController.getRoadtripsByUser);

/* SingleRoadtrip */
api.post("/roadtrip", singleRoadtripController.registerRoadtrip);
api.put("/roadtrip", singleRoadtripController.addRiderToRoadtrip);
api.delete("/roadtrip", singleRoadtripController.deleteRoadtrip);

/* User */
api.get("/user", userController.getUserById);
api.post("/login", userController.getUserByUsernameOrEmail);

/* Root */
api.get("/", (req, res) => {
  res.send("Hi, welcome on the rtour api ! :)");
})

module.exports = api;
