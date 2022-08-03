import express from "express"; //
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv"
import studentRouter from "./api/students.routes.js"
import coursesRouter from "./api/courses.routes.js"
import usersRouter from "./api/users.routes.js"

dotenv.config() //Require statement to import the .env settings file

const app = express();
const port = process.env.PORT || 8000

app.use(cors())
app.use(express.json())

const uri = process.env.URI;
mongoose.connect(uri, { useNewUrlParser: true });

//Print a successful message once a connection is made with the MongoDB
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

//Imports the 'students' and 'courses' API route endpoints 
app.use('/api/students', studentRouter);
app.use('/api/courses', coursesRouter);
app.use('/api/users', usersRouter)
//app.use('/', (req, res)=> res.status(200).json({res: "Welcome to the Backend!"}))
//app.use("*", (req, res) => res.status(404).json({error: "page not found"})) //if navigation to non-existent route

app.listen(port, () => {
    console.log(`Server is running on: ${port}`)
})