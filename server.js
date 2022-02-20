`use strict`;

const express = require("express");

const app = express();

function start(port) {
  app.listen(port, () => {
    console.log(`listening to port ${port}`);
  });
}

app.get("/", (req, res) => {
  res.status(200).send("we are in home");
});

app.get("/data", (req, res) => {
  res.json({
    name: "mohammad",
    email: "mohsalameh1@gmail.com",
  });
});

module.exports = {
  app: app,
  start: start,
};
