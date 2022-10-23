import express from "express";
import bcrypt from "bcrypt";
const lecturersRouter = express.Router();
import Lecturer from "../models/lecturers.model.js"

function checkEmail(requestEmail, userEmail) {
    return requestEmail === userEmail;
}

lecturersRouter.route('/getLecturers').get((request, result) => {
  Lecturer.find()
  .then(Lecturer => result.json(Lecturer))
  .catch(err => res.status(400).json('Error: ' + err))
})

lecturersRouter.route(`/getLecturer/:id`).get((req, res) => {
  Lecturer.findOne({
    staffID: req.body.staffID
  }) // MongoDB function that will find ALL documents
    .then((Lecturer) => res.json(Lecturer))
    .catch((err) => res.status(400).json("Error: " + err));
});

lecturersRouter.route("/add").post((req, res) => {
    bcrypt
      .hash(req.body.password, 10) // hash the provided password and apply 10 rounds of salting
      .then((hashedPassword) => {
        const new_lecturer = new Lecturer({
          fullName: req.body.fullName,
          staffID: req.body.staffID,
          userName: req.body.userName,
          email: req.body.email,
          password: hashedPassword,
          role: req.body.role,
          courses: req.body.courses
        });
        new_lecturer
          .save()
          .then((result) => {
            res.status(200).send({
              message: "Lecturer Created Successfully",
              result,
            });
          })
          .catch((error) => {
            res.status(500).send("Error creating Lecturer"), error;
          });
      });
  
    //Creates a new student document that uses the imported 'Student' model
  });

lecturersRouter.route("/Login").post(async (request, result) => {
    var findUser = {
      then(resolve, reject) {
        resolve(
          Lecturer.collection.findOne(
            { email: request.body.email },
            { password: request.body.password }
          )
        );
      },
    };
  
    var user = await findUser;
  
    try {
      if (user.email === null) {
        user.email = "";
      }
    } catch (error) {
      console.log("Invalid Lecturer Email");
      return result.status(401).send({ message: "Invalid Email or Password" });
    }
  
    {
      /*Have realise that if the request passed into the login contains invalid info, document will return null
      Will need to figure out way to include error handling for when this occurs*/
    }
    const validPassword = await bcrypt.compare(
      request.body.password,
      user.password
    );
  
  
  
    if (!validPassword || !checkEmail) {
      return result.status(401).send({ message: "Invalid Email or Password" });
    } else {
      return result.status(200).send({ message: "Login Successful!", data: user});
    }
  });

  export default lecturersRouter;
