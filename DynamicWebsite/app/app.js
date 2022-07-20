// Import
const express = require("express");
const app = express();
const router = require('../routes/routes');


// Request Listener
app.use(express.urlencoded({extended: true}));


// Handle JSON
app.use(express.json());


// Handle CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'POST, PUT, PATCH, GET, DELETE');
    }
    next();
});


// Middleware for EJS Templating
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);


// Static Site Middleware
app.use(express.static('public'));
app.use(express.static('views'));


// Router Middleware
app.use('/', router);


// Error Handling Middleware
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status(404);
    next(error);
});
app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error:{
            message: error.message,
            status: error.status,
        }
    });
})


// Export
module.exports = app;