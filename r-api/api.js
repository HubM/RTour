const api = require("express").Router();

const roadtripsController = require('./controllers/roadtrips');

/* Roadtrips */
api.get('/roadtrips', roadtripsController.getRoadtrips);


module.exports = api;
