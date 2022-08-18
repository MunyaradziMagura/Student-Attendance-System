import express from "express"
const usersRouter = express.Router();
import bcrypt from 'bcrypt'
import User from '../models/users.model.js';


usersRouter.route("/").get((req, res)=>{
    User.find()
    .then(User => res.json(User))
    .catch(err => res.status(400).json('Error: ' + err))
})

function checkEmail(requestEmail, userEmail) {
    return requestEmail === userEmail
}

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


usersRouter.route('/Login').post(async(request, result) => {

        var findUser = {
            then(resolve, reject) {
            resolve(User.collection.findOne(
            {email: request.body.email},
            {password: request.body.password}),
            )}
        }

        var user = await findUser;

        try {
            if(user.email === null) {
                user.email = ""
            }
        } catch(error) {
            console.log("Invalid Email")
            return result.status(401).send({message: "Invalid Email or Password"})
        }

        {/*Have realise that if the request passed into the login contains invalid info, document will return null
        Will need to figure out way to include error handling for when this occurs*/}
        const validPassword = await bcrypt.compare(request.body.password, user.password)
        
        
        console.log(checkEmail(request.body.email, user.email))
        console.log(request.body.password, user.password)

        if(!validPassword || !checkEmail) {
            return result.status(401).send({message: "Invalid Email or Password"});
        } else {
            return result.status(200).send({message: "Login Successful!"})
        }
});
    
        
    
    //Finding user from the database with matching credentials


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
