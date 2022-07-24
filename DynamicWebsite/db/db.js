// Imports
const { default: mongoose } = require('mongoose');
const Registration = require('../api/models/registration');


// Login
const register = async (req) => {
    const register = new Registration({
        _id: mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        streetAddress: req.body.streetAddress,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        age: req.body.age,
        pronouns: req.body.pronouns,
        consent: req.body.consent,
        bio: req.body.bio,
    });

    return await register.save();
};


// Exports
module.exports = register;