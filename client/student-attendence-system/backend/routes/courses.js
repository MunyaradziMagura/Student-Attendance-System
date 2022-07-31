const router = require('express').Router();
let course = require('../models/course.model');

router.route('/').get((req, res) => {
    course.find()
    .then(course => res.json(course))
    .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {
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

module.exports = router;
