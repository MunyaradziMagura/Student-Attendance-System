import mongoose from 'mongoose';

const Schema = mongoose.Schema;

//Course schema file for validation of new course type documents
const courseSchema = new Schema ({

    //For each field of the schema, various properties are provided:
    //type: determines the data type (e.g. string)
    //required: if field is required or not
    //unique: if field must be unique (similar to primary key)
    //trim: removes leading and trailing whitespace
    //timestamps: timestamps for document creation and updating

    courseName: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    courseCode: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    classes: {
        type: Object,
        required: true,
        unique: false,
        trim: true
    },
    semester: {
        type: String,
        required: true,
        unique: false,
        trim: true
    }, 
}, {
    timestamps: true,   
});

//Creates a new model and 'course' collection in the MongoDB that conforms to this schema
const Course = mongoose.model('Course', courseSchema)

//Exports the schema for usage in the 'courses.routes.js' file
export default Course;