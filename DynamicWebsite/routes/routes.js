// Import
const express = require("express");
const router = express.Router();
const sessions = require("express-session");

// Sessions
router.use(sessions({
    secret: "asdfghjklkjhgfdsa",
    saveUninitialized: true,
    resave: false
}))

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
router.post("/signin", (req, res) => {
    let login = false;

    if(login){
        session = req.session;
        session.userid = "Batman";
        res.render('index', {
            error: "",
            pagename: "Home",
            sess: session
        });
    }
    else{
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
router.post("/register", (req, res) => {
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
        if(req.body.street != ""){
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
});


// Export
module.exports = router;