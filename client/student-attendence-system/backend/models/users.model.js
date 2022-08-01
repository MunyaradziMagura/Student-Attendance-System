const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema ({
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, "Please provide a password!"],
        unique: false,
        trim: true
    }
});

const User = mongoose.model('Users', userSchema)
module.exports = User
