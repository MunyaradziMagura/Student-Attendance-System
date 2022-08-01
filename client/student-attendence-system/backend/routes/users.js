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
            res.status(500).send("Error creating user"),
            error
        });
    });
});

router.route('/login').post((req, res) => {
    User.findOne({email: req.body.email})
    .then((emailCheck)=>{
        if(!emailCheck) {
            return res.status(400).send({
                message: "Emails do not match",
                error,
            });
        }

        res.status(200).send({
            message: "Login Successful"
        })

    })

})

module.exports = router;

