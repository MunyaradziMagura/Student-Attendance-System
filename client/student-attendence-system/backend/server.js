const express = require("express"); //
const cors = require("cors");
const mongoose = require("mongoose");

require('dotenv').config() //Require statement to import the .env settings file

const app = express();
const port = process.env.PORT || 5000; //Run the backend on port 5000

app.use(cors())
app.get("/", (req, res) => res.send("Hello!"))
app.use(express.json())

const uri = process.env.URI;
mongoose.connect(uri, { useNewUrlParser: true });

//Print a successful message once a connection is made with the MongoDB
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

//Imports the 'students' and 'courses' API route endpoints 
const studentsRouter = require('./routes/students');
const coursesRouter = require('./routes/courses');
const userRouter = require('./routes/users')

app.use('/students', studentsRouter);
app.use('/courses', coursesRouter);
app.use('/users', userRouter)

app.listen(port, () =>{
    console.log(`Server is running on port: ${port}`);
});