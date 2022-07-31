const router = require('express').Router();
let user = require('../models/users.model');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const User = require('../models/users.model');

router.route('/add').post((req, res) => {
    bcrypt
    .hash(req.body.password, 10)
    .then((hashedPassword) => {
            const new_user = new user({
                email: req.body.email,
                password: hashedPassword
            });
        new_user.save()
        .then((result) => {
            res.status(201).send({
                message: "User Created Successfully",
                result
            });
        })
        .catch((error) => {
            response.status(500).send("Error creating user")
        });
    });
});

router.route('/login').post((req, res) => {
    User.findOne({email: req.body.email})
    .then((user) => {
        bcrypt.compare(request.body.password, user.password)
        .catch((error) => {
            response.status(400).send({
                message: "Password do not match",
                error,
            })
        })
    })
    .catch((e) => {
        res.status(404).send({
            message: "Email not found",
            e,
        });
    });
})

module.exports = router;

