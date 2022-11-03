import express from "express"

const coursesRouter = express.Router();
import course from '../models/course.model.js'; //Import the 'courses' model for validation when adding new course to MongoDB

//Default enpoint GET request that will return all of the course information contained in the 'courses' collection
coursesRouter.route('/getCourses').get((req, res) => {
    course.find()
    .then(course => res.json(course))
    .catch(err => res.status(400).json('Error: ' + err))
});

//Adds a new course to the 'courses' collection in MongoDB using the below fields
coursesRouter.route('/add').post((req, res) => {

    //Various fields to be used in the API request
    const courseName = req.body.courseName;
    const courseCode = req.body.courseCode;
    const classes = req.body.classes;
    const semester = req.body.semester;

    //Creates a new course document that uses the imported 'course' model
    const new_course = new course({
        courseName,
        courseCode,
        classes,
        semester
    });

    //Saves the new 'course' document into the 'courses' collection
    new_course.save()
    .then(() => res.json('New Course Added!'))
    .catch((err => res.status(400).json('Error: ' + err)))
});

//Exports the coursesRouter to be used in the 'server.js' file
export default coursesRouter;
