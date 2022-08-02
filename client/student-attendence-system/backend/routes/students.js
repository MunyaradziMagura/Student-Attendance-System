import express from "express"

const studentRouter = express.Router()
import Student from "../models/students.model.js"

studentRouter.route('/').get((req, res) => {
    Student.find()
    .then(Student => req.json(Student))
    .catch(err => res.status(400).json('Error: ' + err))
});

studentRouter.route('/add').post((req, res) => {
    const userName = req.body.userName;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const program = req.body.program;

    const new_student = new Student({
        userName,
        firstName,
        lastName,
        program
    });


    new_student.save()
    .then(() => res.json('New User Added!'))
    .catch((err => res.status(400).json('Error: ' + err)))
});

export default studentRouter