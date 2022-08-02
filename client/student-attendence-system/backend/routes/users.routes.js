import express from "express"
const usersRouter = express.Router();
import bcrypt from 'bcrypt'
import User from '../models/users.model.js';
usersRouter.route("/").get((req, res)=>{
    res.send("Hello you're on the Users Backend page!")
})

usersRouter.route('/add').post((req, res) => {
    bcrypt
    .hash(req.body.password, 10)
    .then((hashedPassword) => {
            const new_user = new User({
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

usersRouter.route('/Login').post(async(req, res) => {

    //Finding user from the database with matching credentials
    const findUser = await User.collection.findOne(
        {email: req.body.email},
        {password: req.body.password})
    

        const isPasswordValid = bcrypt.compare(req.body.password, findUser.password, function(err, res) {
                if(!isPasswordValid) {
                    res.status(400).send("Invalid password!"),
                    err
                }

                if(isPasswordValid) {
                    res.status(200).send("Password valid!")
                }
            })
        
    console.log("Request email:", req.body.email)
    console.log("Request password:", req.body.password)
    console.log("DB Email:", findUser.email)
    console.log("DB Password:", findUser.password)


    if(isPasswordValid) {
        res.status({status: "ok", user: true})
    } else {
        res.json({status: "error", user: false})
    }
})

    // if(findUser){
    //     res.json({status: "ok"})
    // } else if(!findUser){
    //     res.json({status: "Error", error: "Invalid Login!"})
    // }
    
    // .then((emailCheck)=>{
    //     if(!emailCheck) {
    //         return res.status(400).send({
    //             message: "Emails do not match"
    //         });
    //     }

    //     res.status(200).send({
    //         message: "Login Successful"
    //     })
    
    // })

    // .then((passwordCheck)=>{
    //     if(!passwordCheck){
    //         return res.status(400).send({
    //             message: "Passwords do not match"
    //         });
    //     }
    // })


export default usersRouter
