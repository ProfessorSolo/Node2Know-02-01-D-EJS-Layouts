const express = require("express");
const indexRouter = express.Router();

indexRouter.get("/", (req, res) => res.render("index", { title: "Home" }));

// route to demonstrate EJS rendering a static HTML file
indexRouter.get("/raw-html", (req, res) => res.render("raw-html"));

// route using the sidebar layout
indexRouter.get("/dashboard", (req, res) => {
  res.render("dashboard", { 
    title: "Mission Control",
    layout: "layouts/sidebar" 
  });
});


module.exports = indexRouter;
