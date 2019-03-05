const express = require("express");
const helmet = require('helmet');

const logger = require('./services/logger');

/* Database init */
const { connectDb } = require("./database");

connectDb()
  .then(() => {
    logger.info("Database connected");
  })
  .catch(err => {
    logger.error("Database connection fail", err);
  });







const app = express();



app.use(helmet());
app.disable('x-powered-by');

const api = require("./api");
app.use("/api/v1", api);

module.exports = app;
