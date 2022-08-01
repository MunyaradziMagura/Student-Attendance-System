const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Student schema file for validation of new student type documents
const studentSchema = new Schema ({
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    firstName: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    program: {
        type: String,
        required: true,
        unique: false,
        trim: true
    }, 
}, {
    timestamps: true,   
});

const Student = mongoose.model('Student', studentSchema)

module.exports = Student;