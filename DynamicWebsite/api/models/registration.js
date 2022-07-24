// Imports
const mongoose = require("mongoose");


// Register Schema
const registrationSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    streetAddress: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    zip: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    pronouns: {
        type: String,
        required: true,
    },
    consent: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
        required: true,
    },
});


// Exports
module.exports = mongoose.model("Registration", registrationSchema);