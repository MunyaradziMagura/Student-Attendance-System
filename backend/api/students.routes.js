import express from "express"

const studentRouter = express.Router()
import Student from "../models/students.model.js"

studentRouter.route('/').get((req, res) => {
    Student.find()
        .then(student => res.json(student))
        .catch(err => res.status(400).json('Error: ' + err))
})

studentRouter.route('/detail/:id').get((req, res) => {
    let {
        id
    } = req.params;
    Student.findOne({
            _id: id
        })
        .then(student => res.json(student))
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