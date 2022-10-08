import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv"; //Imports the .env file for backend configuration
import studentRouter from "./api/students.routes.js"; //Imports student API routes
import coursesRouter from "./api/courses.routes.js"; //Imports course API routes
import lecturersRouter from "./api/lecturers.routes.js"
import attendedCourseRecordsRouter from "./api/attendedCourseRecords.routes.js";

dotenv.config(); //Require statement to import the .env settings file

const app = express(); //Use express as the middleware for the server
const port = process.env.PORT || 8000; //Set the port number to what is specified in .env file or port 8000

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//Set the URI (DB connection string) to the variable specified in .env file
const uri = process.env.URI;

//Connect to the MongoDB database using the connection string
mongoose.connect(uri, { useNewUrlParser: true });

//Print a successful message once a connection is made with the MongoDB
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});


//Imports the 'students', 'courses', and 'users' API route endpoints
app.use("/api/students", studentRouter);
app.use("/api/courses", coursesRouter);
app.use("/api/lecturers", lecturersRouter)
app.use("/api/courseAttendanceRecords", attendedCourseRecordsRouter)

//Console log to show that the backend is listening on the specified port in .env file
app.listen(port, () => {
  console.log(`Server is running on: ${port}`);
});
