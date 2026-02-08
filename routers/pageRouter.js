
const express = require("express");
const pageRouter = express.Router();
const path = require("path");


pageRouter.get("/about", (req, res) =>
  res.sendFile(path.join(__dirname, "/../pages/about.html"))
);

pageRouter.get("/josh", (req, res) =>
  res.sendFile(path.join(__dirname, "/../pages/josh.html"))
);

module.exports = pageRouter;
