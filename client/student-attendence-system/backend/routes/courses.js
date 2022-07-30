const router = require('express').Router();
let course = require('../models/course.model');

router.route('/').get((req, res) => {
    course.find()
    .then(course => res.json(course))
    .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {
    const new_course_name = req.body.name;
    const new_course_code = req.body.course_code;
    const new_semester = req.body.semester;

    const new_course = new course({
        new_course_name,
        new_course_code,
        new_semester
    });


    new_course.save()
    .then(() => res.json('New Course Added!'))
    .catch((err => res.status(400).json('Error: ' + err)))
})
