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

//Currently only does the API call for checking of email contained in DB, not for password
usersRouter.route('/Login').post( async (req, res) => {

    //Finding user from the database with matching credentials
    const findUser = await User.findOne({
        email: req.body.email,
        password: req.body.password
    })


    if(!findUser) {
        return res.json({status: "Error", error: "Invalid Login!"})
    }

    //console.log(findUser.email, req.body.email)


    const isPasswordValid = bcrypt.compare(req.body.password, findUser.password, function(err, res) {
        if(err) {
            return res.json({status: "Error", error: "Invalid password!"})
        }
        else if(res) {
            return res.json({status: "ok"})
        }
    })

    console.log(req.body.password)

    if(isPasswordValid) {
        return res.json({status: "ok", user: true})
    } else {
        return res.json({status: "error", user: false})
    }
    
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

    console.log(findUser.email, findUser.hashedPassword)

})

export default usersRouter
