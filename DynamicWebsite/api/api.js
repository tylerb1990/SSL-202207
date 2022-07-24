// Imports
const axios = require('axios');
require('dotenv').config();


const getRegistration = async (data) => {
    return await axios.post(process.env.service_url, data);
}


// Exports
module.exports = getRegistration;