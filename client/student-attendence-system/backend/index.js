import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import CoursesDAO from "./DAO/coursesDAO.js"
import CoursesController from "./DAO/courses.controller.js"

dotenv.config()
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000

MongoClient.connect(
    process.env.URI, {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        useNewUrlParser: true}
)
.catch(err => {
    console.error(err.stack)
    process.exit(1)
})
.then(async client => {
    await CoursesDAO.injectDB(client)
    app.listen(port, () => {
        console.log(`Listening on port ${port}`)
    })
})