import express from "express";
import bcrypt from "bcrypt";
const lecturersRoutes = express.Router();
import Lecturer from "../models/lecturers.model.js"

function checkEmail(requestEmail, userEmail) {
    return requestEmail === userEmail;
}

lecturersRoutes.route("/Login").post(async (request, result) => {
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
      console.log("Invalid Email");
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