const api = require("express").Router();

const roadtripsController = require('./controllers/roadtrips');
const singleRoadtripController = require('./controllers/singleRoadtrip');

/* List Roadtrips */
api.get('/roadtrips', roadtripsController.getRoadtrips);

/* SingleRoadtrip */
api.post('/roadtrip', singleRoadtripController.registerRoadtrip)

module.exports = api;
