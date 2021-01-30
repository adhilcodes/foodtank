const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    latitude: {
        type: String    
    },
    longitude: {
        type: String
    }
});
var userModel = mongoose.model('User', userSchema)
module.exports = userModel;
