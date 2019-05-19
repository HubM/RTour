const api = require("express").Router();

const notificationsController = require("./controllers/notifications");
const roadtripsController = require("./controllers/roadtrips");
const singleRoadtripController = require("./controllers/singleRoadtrip");
const userController = require("./controllers/user");

/* Notifications */
api.post("/registerPushs", notificationsController.getDeviceToken);

/* List Roadtrips */
api.get("/roadtrips/byDate", roadtripsController.getRoadtripsByDate);
api.get("/roadtrips/byUser", roadtripsController.getRoadtripsByUser);

/* SingleRoadtrip */
api.get("/roadtrip", singleRoadtripController.getRoadtripById);
api.post("/roadtrip", singleRoadtripController.registerRoadtrip);
api.put("/roadtrip", singleRoadtripController.addRiderToRoadtrip);
api.delete("/roadtrip", singleRoadtripController.deleteRoadtrip);

/* User */
api.get("/user", userController.getUserById);
api.post("/user", userController.registerUser);
api.post("/login", userController.getUsername);

/* Riders Request delete (canceled or refused) */
api.post("/rider", singleRoadtripController.acceptedRiderToRoadtrip);
api.delete("/rider", singleRoadtripController.refusedOrCanceledRiderToRoadtrip);

/* Root */
api.get("/", (req, res) => {
  res.send("Hi, welcome on the rtour api ! :)");
})

module.exports = api;
