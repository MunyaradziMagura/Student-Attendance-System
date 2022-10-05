import {addCourseAttendanceRecord} from "./doRequest"
import { ClientJS } from "clientjs";


var attendanceRecord = {
    "courseID": "156761",
    "courseName": "Digital Thinking and Digital Innovation",
    "staffID": "110205689",
    "date": "22/09/22",
    "studyPeriod": "SP2",
    "classType": "Lecture",
    "attendance": "{deviceFingerPrint:201580001,firstName:'Tom',lastName: 'Smith', userName: '111111111'}||"
}

class addCourseAttendanceRecords {

    addRecord = () => {
        addCourseAttendanceRecord({
            courseID: attendanceRecord.courseID,
            courseName: attendanceRecord.courseName,
            staffID: attendanceRecord.staffID,
            date: attendanceRecord.date,
            studyPeriod: attendanceRecord.staffID,
            classType: attendanceRecord.classType,
            attendance: attendanceRecord.attendance
        })
    }
    
    constructor() {
      this.client = new ClientJS();
    }
    
  
    fingerprint() {
      return this.client.getFingerprint();
    }
    browser() {
      this.client.getBrowserVersion();
    }
  }
  



export default addCourseAttendanceRecords;
