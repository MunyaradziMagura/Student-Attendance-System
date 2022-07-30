const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require('dotenv').config()

const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.get("/", (req, res) => res.send("Hello!"))
app.use(express.json())

const uri = process.env.URI;
mongoose.connect(uri, { useNewUrlParser: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

const studentsRouter = require('./routes/students');
const coursesRouter = require('./routes/courses');

app.use('/students', studentsRouter);
app.use('/courses', coursesRouter);

app.listen(port, () =>{
    console.log(`Server is running on port: ${port}`);
});