const router = require('express').Router();
let user = require('../models/students.model');

router.route('/').get((req, res) => {
    course.find()
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {
    const userName = req.body.userName;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const program = req.body.program;

    const new_user = new user({
        userName,
        firstName,
        lastName,
        program
    });


    new_user.save()
    .then(() => res.json('New User Added!'))
    .catch((err => res.status(400).json('Error: ' + err)))
});

module.exports = router;
