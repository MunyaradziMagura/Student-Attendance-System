import express from "express"
import course from '../models/course.model.js';
const coursesRouter = express.Router();


coursesRouter.route('/').get((req, res) => {
    course.find()
    .then((foundCourse) => res.json(foundCourse))
    .catch(err => res.status(400).json('Error: ' + err))
});

coursesRouter.route('/add').post((req, res) => {
    const courseName = req.body.courseName;
    const courseCode = req.body.courseCode;
    const classes = req.body.classes;
    const semester = req.body.semester;

    const new_course = new course({
        courseName,
        courseCode,
        classes,
        semester
    });

    new_course.save()
    .then(() => res.json('New Course Added!'))
    .catch((err => res.status(400).json('Error: ' + err)))
});

export default coursesRouter;
