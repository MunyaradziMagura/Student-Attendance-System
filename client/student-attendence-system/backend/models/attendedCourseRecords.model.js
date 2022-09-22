import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const courseRecordsSchema = new Schema ({

    courseID: {
        type: String,
        required: true,
        trim: true

    }, 
    courseName: {
        type: String,
        required: true,
        trim: true

    },
    staffID: {
        type: String,
        required: true,
        trim: true

    },
    date: {
        type: String,
        required: true,
        trim: true

    },
    studyPeriod: {
        type: String,
        required: true,
        trim: true

    },
    classType: {
        type: String,
        required: true,
        trim: true

    },
    attendance: {
        type: String,
        required: true,
        trim: true
    }

})

const CourseRecord = new mongoose.model("CourseAttendanceRecords", courseRecordsSchema)

export default CourseRecord