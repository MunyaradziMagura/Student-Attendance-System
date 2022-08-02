import express from "express"
import app from "../server.js"
const usersRouter = express.Router();
import user from '../models/users.model.js';
import bcrypt from 'bcrypt';
import User from '../models/users.model.js';


usersRouter.route("/").get((req, res)=>{
    res.send("Hello World")
})

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

//Currently only does the API call for checking of email contained in DB, not for password
usersRouter.route('/Login').post((req, res) => {
    User.findOne({email: req.body.email,
    password: req.body.password})
    
    .then((emailCheck)=>{
        if(!emailCheck) {
            return res.status(400).send({
                message: "Emails do not match"
            });
        }

        res.status(200).send({
            message: "Login Successful"
        })
        
    })
})

export default usersRouter
