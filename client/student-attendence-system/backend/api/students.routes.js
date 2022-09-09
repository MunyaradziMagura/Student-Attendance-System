import express from "express";
import bcrypt from "bcrypt";
const studentRouter = express.Router();
import Student from "../models/students.model.js"; // Import the 'students' model for validation when adding new student to MongoDB

// Default endpoint GET request that will return all student information contained in the MongoDB
studentRouter.route("/").get((req, res) => {
  Student.find() // MongoDB function that will find ALL documents
    .then((student) => res.json(student))
    .catch((err) => res.status(400).json("Error: " + err));
});

function checkEmail(requestEmail, userEmail) {
  return requestEmail === userEmail;
}


//Adds a new student to the 'students' collection in MongoDB using the below fields
studentRouter.route("/add").post((req, res) => {
  bcrypt
    .hash(req.body.password, 10) // hash the provided password and apply 10 rounds of salting
    .then((hashedPassword) => {
      const new_user = new Student({
        studentID: req.body.studentID,
        userName: req.body.userName,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        attendance: req.body.attendance,
        program: req.body.program,
        email: req.body.email,
        password: hashedPassword,
      });
      new_user
        .save()
        .then((result) => {
          res.status(201).send({
            message: "User Created Successfully",
            result,
          });
        })
        .catch((error) => {
          res.status(500).send("Error creating user"), error;
        });
    });

  //Creates a new student document that uses the imported 'Student' model
});

//Endpoint that performs a GET request to return attendance data for a student
studentRouter.route(`/getAttendance/:id`).get(async (request, result) => {
  //Performs a lookup in the MongoDB that will return one document or nothing if not found
  const attendance = await Student.findOne({
    studentID: request.body.studentID,
  })
    .then((Student) => result.json(Student))
    .catch((err) => result.status(400).json("Error: " + err));
});

//Performs login function when hitting the '/login' endpoint
studentRouter.route("/Login").post(async (request, result) => {
  var findUser = {
    then(resolve, reject) {
      resolve(
        Student.collection.findOne(
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

//Exports the studentRouter to be used in the 'server.js' file
export default studentRouter;
