let courses

export default class CoursesDAO {
    static async injectDB(conn) {
        if(courses){
            return
        }
        try {
            courses = await conn.db(process.env.STUDENT_ATTENDANCE_DB).collection("courses")
        } catch (e) {
            console.error(`Unable to establish collection handle in CoursesDAO: ${e}`)
        }
    }
}