import express from "express"

const studentRouter = express.Router()
import Student from "../models/students.model.js"

studentRouter.route('/').get((req, res) => {
    Student.find()
    .then(student => res.json(student))
    .catch(err => res.status(400).json('Error: ' + err))
})
    
studentRouter.route('/add').post((req, res) => {
    const studentID = req.body.studentID;
    const userName = req.body.userName;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const attendance = req.body.attendance;
    const program = req.body.program;

    const new_student = new Student({
        studentID,
        userName,
        firstName,
        lastName,
        attendance,
        program
    });


    new_student.save()
    .then(() => res.json('New User Added!'))
    .catch((err => res.status(400).json('Error: ' + err)))
});

studentRouter.route('/getAttendance').get(async(request, result) => {

    const attendance = await Student.findOne({studentID: request.body.studentID})
    .then(student => result.json(student))
    .catch(err=> result.status(400).json('Error: ' + err))

    console.log(attendance)
})

export default studentRouter

