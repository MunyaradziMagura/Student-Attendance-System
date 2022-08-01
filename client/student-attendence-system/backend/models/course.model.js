import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const courseSchema = new Schema ({
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

const Course = mongoose.model('Course', courseSchema)

export default Course;