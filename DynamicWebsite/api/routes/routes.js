// Imports
const express = require("express");
const router = express.Router();
const sessions = require("express-session");
const registration = require('../../db/db');
const getRegistration = require('../api');


// Sessions
router.use(sessions({
    secret: "asdfghjklkjhgfdsa",
    saveUninitialized: true,
    resave: false
}));


// Session variable
let session;


// Routes
router.get("/", (req, res) => {
    session = req.session;
    res.render('index', {
        pagename: "Home",
        sess: session
    })
});
router.get("/portfolio", (req, res) => {
    session = req.session;
    res.render('portfolio', {
        pagename: "Tylers Portfolio",
        sess: session
    })
});
router.get("/contact", (req, res) => {
    session = req.session;
    res.render('contact', {
        pagename: "Contact Tyler",
        sess: session
    })
});
router.get("/register", (req, res) => {
    session = req.session;
    res.render('register', {
        pagename: "Register for My Newsletter",
        sess: session
    })
});
router.get("/signin", (req, res) => {
    res.render('signin', {
        pagename: "Sign in to your account",
        sess: session
    })
});


// Sign in/out route
router.post("/signin", (req, res, next) => {
    // Validate credentials
    if(req.body.username == "mike@aol.com" && req.body.password == "abc123"){
        session = req.session;
        session.userid = "Batman";
        res.render('index', {
            error: "",
            pagename: "Home",
            sess: session
        });
    }
    else {
        res.render('signin', {
            pagename: "Sign in to your account",
            error: "Invalid email or password"
        })
    }
});
router.get("/signout", (req, res) => {
    req.session.destroy(null);
    res.render('index', {
        pagename: "Home"
    })
});


// Register route
router.post("/register", async (req, res, next) => {
    // Declare session
    session = req.session;

    // Validation Errors
    let error = {};

    let validating = true;

    if(validating){
        // Validate firt name
        if(req.body.firstName != ""){
        }
        else{ 
            error.status = "Registration Failed";
            error.firstNameMsg = "Your first name is required and cannot be blank.";
        }
        // Validate last name
        if(req.body.lastName != ""){
        }
        else{ 
            error.status = "Registration Failed";
            error.lastNameMsg = "Your last name is required and cannot be blank.";
        }
            // Validate street
        if(req.body.streetAddress != ""){
        }
        else{ 
            error.status = "Registration Failed";
            error.streetMsg = "Your street address is required and cannot be blank.";
        }
        // Validate city
        if(req.body.city != ""){
        }
        else{ 
            error.status = "Registration Failed";
            error.cityMsg = "Your city is required and cannot be blank.";
        }

        // Validate state
        if(req.body.state != ""){
        }
        else{ 
            error.status = "Registration Failed";
            error.stateMsg = "Your state is required and cannot be blank.";
        }

        // Validate zip
        if(req.body.zip != ""){
        }
        else{ // Error response
            error.status = "Registration Failed";
            error.zipMsg = "Your zip is required and cannot be blank.";
        }
        // Render
        res.render("register", {
            pagename: "Register for My Newsletter",
            error: error
        });
    }

    // Validation
    registration(req).then((result) => {
        console.log(result);
        res.status(200).json({
            message: "Registration Saved",
            status: 200,
            registration: {
                firstName: result.firstName,
                lastName: result.lastName,
                streetAddress: result.streetAddress,
                city: result.city,
                state: result.state,
                zip: result.zip,
                age: result.age,
                pronouns: result.pronouns,
                consent: result.consent,
                bio: result.bio,
                metadata: {
                    hostname: req.hostname,
                    method: req.method
                }
            }
        });   
    }).catch(err => {
        res.status(500).json({
            message: "Registration Failed",
            status: 500,
            error: {
                message: err.message,
                metadata: {
                    hostname: req.hostname,
                    method: req.method
                },
            }
        });
    });

    // Data binding
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const streetAddress = req.body.streetAddress;
    const city = req.body.city;
    const state = req.body.state;
    const zip = req.body.zip;
    const age = req.body.age;
    const pronouns = req.body.pronouns;
    const consent = req.body.consent;
    const bio = req.body.bio;

    // Registration Data
    const data = {
        firstName: firstName,
        lastName: lastName,
        streetAddress: streetAddress,
        city: city,
        state: state,
        zip: zip,
        age: age,
        pronouns: pronouns,
        consent: consent,
        bio: bio
    }

    // Render valid registration
    await getRegistration(data).then(result => {
        console.log(result.data)
        res.render('register', {
            pagename: "Register for My Newsletter",
            sess: session,
        })
    })
    .catch(err => {
        res.render("register", {
            pagename: "Register for My Newsletter",
            error: err
        });
    });
});


// Export
module.exports = router;