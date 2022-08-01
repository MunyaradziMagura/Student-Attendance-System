import express from "express"

const usersRouter = express.Router();
import user from '../models/users.model.js';
import bcrypt from 'bcrypt';
//import jwt = require("jsonwebtoken");
import User from '../models/users.model.js';

usersRouter.route('/add').post((req, res) => {
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

usersRouter.route('/login').post((req, res) => {
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

export default usersRouter
