// Imports
const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
const path = require("path");


// Router
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "/views/home.html"));
});
router.get("/portfolio", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "/views/portfolio.html"));
});
router.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "/views/contact.html"));
});


// Exports
module.exports = router;