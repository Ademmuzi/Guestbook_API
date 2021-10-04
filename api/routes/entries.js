"use strict";
const express = require("express");
const router = express.Router();

const entries = require("../db/entries");

router.get("/", async (req, res) => {
  let data = await entries.getAll();
  res.send(data);
});

router.post("/", async (req, res) => {
  const { visitor } = req.body;
  if (visitor === undefined) {
    res.status(400).send("Bad request!");
    return;
  }
  let result = await entries.insert(req.body);
  res.send({
    message: `Inserted an entrie with the ID - ${result}`,
  });
});

module.exports = router;
