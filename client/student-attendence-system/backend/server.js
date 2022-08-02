import express from "express"; //
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv"
import passport from 'passport-local';
import bcrypt from 'bcrypt'
import studentRouter from "./routes/students.js"
import coursesRouter from "./routes/courses.js"
import usersRouter from "./routes/users.js"

dotenv.config() //Require statement to import the .env settings file

const app = express();
//const port = process.env.PORT || 5000; //Run the backend on port the port specified in .env or run on port 5000

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
app.use("*", (req, res) => res.status(404).json({error: "not found"}))



// app.listen(port, () =>{
//     console.log(`Server is running on port: ${port}`);
// });


export default app;