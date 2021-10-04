"use strict";
const express = require("express");
const helmet = require("helmet");

const error = require("../middleware/error");
const entries = require("../routes/entries");

module.exports = (app) => {
  app.use(helmet());
  app.use(express.json());
  app.use("/guestbook/entries", entries);
  app.use(error);
};
