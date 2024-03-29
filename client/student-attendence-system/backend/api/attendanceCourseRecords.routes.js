import express from "express"
import CourseRecord from "../models/attendanceCourseRecords.model.js";

const attendedCourseRecordsRouter = express.Router();

attendedCourseRecordsRouter.route('/getAttendanceRecords').get((req, res) => {
    CourseRecord.find()
    .then(CourseRecord => res.json(CourseRecord))
    .catch((error) => res.status(400).json("Error:" + error))
})

attendedCourseRecordsRouter.route('/getAttendance/class').post((req, res) => {
    CourseRecord.find({
        staffID: req.params.staffID
    })
    .then(CourseRecord => res.json(CourseRecord))
    .catch((error) => res.status(400).json("Error:" + error))
})


attendedCourseRecordsRouter.route('/getAttendance/student').post((req, res) => {
    CourseRecord.find()
    .then(CourseRecord => res.json(CourseRecord))
    .catch((error) => res.status(400).json("Error:" + error))
})

attendedCourseRecordsRouter.route('/add').put((req, res) => {

        const catalogueID = req.body.catalogueID;
        const courseName = req.body.courseName;
        const staffID = req.body.staffID;
        const date = req.body.date;
        const studyPeriod = req.body.studyPeriod;
        const attendies = req.body.attendies;
        const classType = req.body.classType;
        const attendance = req.body.attendance;

    //Various fields to be used in the API request
    

    //Creates a new course document that uses the imported 'course' model
    const newAttendanceRecord = new CourseRecord({
        catalogueID,
        courseName,
        staffID,
        date,
        studyPeriod,
        attendies,
        classType,
        attendance,
    });

    //Saves the new 'course' document into the 'courses' collection
    newAttendanceRecord.save()
    .then(() => res.json('New Course Attendance Record Added!'))
    .catch((err => res.status(400).json('Error: ' + err)))
});

attendedCourseRecordsRouter.get(`/getAttendance/:courseName/:staffID`, (req, res) => {    
    CourseRecord.find({
        //classType: req.params.classType,
        courseName: req.params.courseName,
        staffID: req.params.staffID,
    })
    .then((CourseRecord) => res.json(CourseRecord))
    .catch((err) => res.status(400).json("Error: " + err))
})




export default attendedCourseRecordsRouter