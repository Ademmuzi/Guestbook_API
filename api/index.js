"use strict";
require("dotenv").config();

const express = require("express");
const app = express();

require("./startup/logging");
require("./startup/routes")(app);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log(`Listing on port ${port}..`));

module.exports = server;
