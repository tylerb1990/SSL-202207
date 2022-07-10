const express = require("express");
require("dotenv").config();
const app = express();



// GET
app.get("/", (req, res, next) => {
    res.json({
        message: "Did you GET it?",
        metadata: {
            host:req.hostname,
            port:req.socket.localPort,
            method: req.method
        }
    })
})

// POST
app.post("/", (req, res, next) => {
    res.json({
        metadata: {
            host:req.hostname,
            port:req.socket.localPort,
            method: req.method
        }
    })
});

// PATCH
app.patch("/", (req, res, next) => {
    res.json({
        metadata: {
            host:req.hostname,
            port:req.socket.localPort,
            method: req.method
        }
    })
});

// DELETE
app.delete("/", (req, res, next) => {
    res.json({
        metadata: {
            host:req.hostname,
            port:req.socket.localPort,
            method: req.method
        }
    })
});



// Middleware modules for error handling
app.use((req, res, next) => {
    const error = new Error("NOT FOUND");
    error.status = 404;
    next(error);
});
//Middleware to send error nicely
app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message, 
            status: error.status,
            method: req.method
        }
    });
});


app.listen(process.env.port, () => console.log(`Starting server on port ${process.env.port}`));