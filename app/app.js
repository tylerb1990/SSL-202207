// Imports
const express = require("express");
const route = require("../routes/routes");


// Request Listener
const app = express();


// Static Content
app.use(express.static('public'));
app.use(express.static('views'));


// Router
app.use("/", route)


// Exports
module.exports = app;