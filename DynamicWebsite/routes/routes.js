// Import
const express = require("express");
const router = express.Router();


// Routes
router.get("/", (req, res) => {
    res.render('index', {
        pagename: "Home"
    })
});
router.get("/portfolio", (req, res) => {
    res.render('portfolio', {
        pagename: "Tylers Portfolio"
    })
});
router.get("/contact", (req, res) => {
    res.render('contact', {
        pagename: "Contact Tyler"
    })
});
router.get("/register", (req, res) => {
    res.render('register', {
        pagename: "Register for My Newsletter"
    })
});

// Validation Errors
let error = {};
error.status = "Registration Failed";
error.firstNameMsg = "Your first name is required and cannot be blank.";
error.lastNameMsg = "Your last name is required and cannot be blank.";
error.streetMsg = "Your street address is required and cannot be blank.";
error.cityMsg = "Your city is required and cannot be blank.";
error.stateMsg = "Your state is required and cannot be blank.";
error.zipMsg = "Your zip is required and cannot be blank.";

router.post("/register", (req, res) => {
    // Validate form data
    if(req.body.firstName != 'undefined'){
        console.log("Pass")
    }
    else{ // Error response
        res.render({status: error.status, error: error.firstNameMsg});
    }
});


// Export
module.exports = router;