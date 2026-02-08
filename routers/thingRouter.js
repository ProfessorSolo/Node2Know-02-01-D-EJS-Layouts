
const express = require("express");
const thingRouter = express.Router();

const things = [
  { id: 1, name: "Thing 1", description: "Description 1", active: true },
  { id: 2, name: "Thing 2", description: "Description 2", active: false },
  { id: 3, name: "Thing 3", description: "Description 3", active: true },
];

thingRouter.get("/", (req, res) => {
  const viewData = {
    title: "EJS Demo - Thing List",
    things: things,
  };
  res.render("things", viewData);
});

thingRouter.get("/:thingId", (req, res) => {
  const viewData = {
    title: "EJS Demo - Thing Details",
    thing: things.find((thing) => thing.id === parseInt(req.params.thingId)),
  };
  res.render("thing", viewData);
});

module.exports = thingRouter;
