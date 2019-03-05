const express = require("express");
const logger = require('./services/logger');
const { connectDb } = require("./database");

connectDb()
  .then(() => {
    logger.info("Database connected");
  })
  .catch(err => {
    logger.error("Database connection fail", err);
  });


const app = express();




const api = require("./api");
app.use("/api/v1", api);

module.exports = app;
