import express from "express"

const coursesRouter = express.Router();
import course from '../models/course.model.js';

coursesRouter.route('/').get((req, res) => {
    course.find()
    .then(course => res.json(course))
    .catch(err => res.status(400).json('Error: ' + err))
});

coursesRouter.route('/detail/:id').get((req, res) => {
    console.log("params = ", req.params)
    let { id } = req.params;
    course.findOne({
        _id: id
    })
    .then(course => res.json(course))
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
