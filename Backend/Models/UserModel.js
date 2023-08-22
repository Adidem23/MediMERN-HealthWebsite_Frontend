const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    Name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    }
});


module.exports = mongoose.model("webusers", userSchema);