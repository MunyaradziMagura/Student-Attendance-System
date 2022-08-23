import express from "express"

const studentRouter = express.Router()
import Student from "../models/students.model.js" //Import the 'students' model for validation when adding new student to MongoDB

//Default endpoint GET request that will return all student information contained in the MongoDB
studentRouter.route('/').get((req, res) => {
    Student.find() //MongoDB function that will find ALL documents
    .then(student => res.json(student))
    .catch(err => res.status(400).json('Error: ' + err))
})

//Adds a new student to the ''students' collection in MongoDB using the below fields
studentRouter.route('/add').post((req, res) => {

    //Various fields that will store information related to student type documents
    const studentID = req.body.studentID;
    const userName = req.body.userName;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const attendance = req.body.attendance;
    const program = req.body.program;

    //Creates a new student document that uses the imported 'Student' model
    const new_student = new Student({
        studentID,
        userName,
        firstName,
        lastName,
        attendance,
        program
    });

    //Saves the newly created student document into the 'students' collection
    new_student.save()
    .then(() => res.json('New User Added!'))
    .catch((err => res.status(400).json('Error: ' + err)))
});

//Endpoint that performs a GET request to return attendance data for a student
studentRouter.route('/getAttendance').get(async(request, result) => {

    //Performs a lookup in the MongoDB that will return one document or nothing if not found
    const attendance = await Student.findOne({studentID: request.body.studentID})
    .then(student => result.json(student))
    .catch(err=> result.status(400).json('Error: ' + err))
})

//Exports the studentRouter to be used in the 'server.js' file
export default studentRouter

