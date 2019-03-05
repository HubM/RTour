const express = require("express");
const app = express();
const api = require("./api");

app.use("/api/v1", api);

module.exports = app;
