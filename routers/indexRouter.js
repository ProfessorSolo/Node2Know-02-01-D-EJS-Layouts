const express = require("express");
const indexRouter = express.Router();

indexRouter.get("/", (req, res) => res.render("index", { title: "Home" }));

// route using the sidebar layout
indexRouter.get("/dashboard", (req, res) => {
  res.render("dashboard", { 
    title: "Mission Control",
    layout: "layouts/sidebar" 
  });
});


module.exports = indexRouter;
