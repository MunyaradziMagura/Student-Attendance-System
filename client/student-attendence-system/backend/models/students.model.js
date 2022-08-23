import mongoose from 'mongoose';

const Schema = mongoose.Schema;

//Student schema file for validation of new student type documents
const studentSchema = new Schema ({

    //type: determines the data type (e.g. string)
    //required: if field is required or not
    //unique: if field must be unique (similar to primary key)
    //trim: removes leading and trailing whitespace
    //timestamps: timestamps for document creation and updating
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

//Creates a new model and 'students' collection in the MongoDB that conforms to this schema
const Student = mongoose.model('Student', studentSchema)

//Exports the schema for usage in the 'students.routes.js' file
export default Student;