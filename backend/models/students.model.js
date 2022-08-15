import mongoose from 'mongoose';

const Schema = mongoose.Schema;

//Student schema file for validation of new student type documents
const studentSchema = new Schema ({
    studentID: {
        type: String,
        required: true,
        unique: true
    },
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
    attendance: {
        type: Object,
        required: true,
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

export default Student;