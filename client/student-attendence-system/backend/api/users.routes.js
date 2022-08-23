import express from "express"
const usersRouter = express.Router();
import bcrypt from 'bcrypt' //Bcrypt library for password hashing
import User from '../models/users.model.js'; //Imports the 'User' type model for document validation


usersRouter.route("/").get((req, res)=>{
    User.find()
    .then(User => res.json(User))
    .catch(err => res.status(400).json('Error: ' + err))
})

function checkEmail(requestEmail, userEmail) {
    return requestEmail === userEmail
}

//Adds a new user into the 'user' collection of the MongoDB database
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

//Performs login function when hitting the '/login' endpoint
usersRouter.route('/Login').post(async(request, result) => {

        //Performs lookup in the MongoDB database for the provided email and password
        var findUser = {
            then(resolve, reject) {
            resolve(User.collection.findOne(
            {email: request.body.email},
            {password: request.body.password}),
            )}
        }

        //Stores the result of the MongoDB lookup
        var user = await findUser;

        //Try catch to test for the case where an invalid/non-existent is queried
        try {
            if(user.email === null) { //Sets the email to empty string if the email queried comes back as null
                user.email = ""
            }
        } catch(error) {
            console.log("Invalid Email")
            return result.status(401).send({message: "Invalid Email or Password"})
        }

        //Performs validation on the user password and stored hashed password using the Bcrypt library
        const validPassword = await bcrypt.compare(request.body.password, user.password)
        
        //Checks the results for 'emailCheck' or 'validPassword'
        //If either returns as 'false' return 401 response, else 200 OK
        if(!validPassword || !checkEmail) {
            return result.status(401).send({message: "Invalid Email or Password"});
        } else {
            return result.status(200).send({message: "Login Successful!"})
        }
});

export default usersRouter
