import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import ReactTypingEffect from "react-typing-effect";
import Table from "react-bootstrap/Table"
import BarcodeReader from 'react-barcode-reader'
import React from "react";
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'
import { addCourseAttendanceRecord } from "../../utils/doRequest"
import {IoCheckmarkCircle, IoCloseCircle} from 'react-icons/io5'


function AttendanceTakingPopUp(props) {


  let deviceFingerprintsSet = new Set()
  const [result, setResult] = useState("")
  const [toast, setToast] = useState(false) //State variables for the toast notification

    var array = []
    var jsonObjectsArray = [] // stores student objects scanned in 

    function convertToJSON(element) {

      // console.log(element)
      let jsonFormat = JSON.parse(element)
      // console.log(JSON.stringify(jsonFormat))
      jsonObjectsArray.push(jsonFormat)
      // jsonObjectsArray.pop()
      // console.log(jsonObjectsArray)
  }

  // Validates whether there is any scanned students to submit 
  // If no students in attendance object, show failure notification, otherwise show success notification


  const staff = JSON.parse(localStorage.getItem('lecturer'))

  function validateAttendance() {
    if(jsonObjectsArray.length == 0) {
      setToast(true)
    } else {
      submitStudents()
    }
  }

  function submitStudents(){

    setToast(true)

    let students = "";

    jsonObjectsArray.forEach(e => {
      let person = JSON.stringify(e)
      person = person.replaceAll(`"`, `'`);
      students = students + person + '||'
    });


    addCourseAttendanceRecord({
    // object which will be sent to the 'course attendance records' collection
        "catalogueID": localStorage.getItem('catalogueID'),
        "courseName": localStorage.getItem('courseName'),
        "staffID": staff.staffID,
        "date": props.date,
        "studyPeriod": localStorage.getItem('studyPeriod'),
        "classType": props.classType,
        "attendance": students
    }
    
    )};


  return (
    <>
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      

      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <ReactTypingEffect
            speed={70}
            cursor={" "}
            typingDelay={500}
            eraseSpeed={80}
            text={["TAKING ATTENDANCE...", "DO NOT TOUCH KEYBOARD"]}
          />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
      <div style={{display: "none"}}>
            
            <BarcodeReader minLength={48} //Minimum number of characters that must be scanned before input will be read
                onScan={(data) => setResult(result + "||" + data)} //Concatenates a 'salt' at the end of our strings
            />

        {/* Splits our array on the '||' salt*/}
        {array = result.split("||")}

        {/* Filters out the initial array starting value of an empty string, returning only non-empty array elements*/}
        {array = array.filter(element => {            
            return element !== '';
        })}

        {/* For each element in the array, convert each into JSON format */}
        {array.forEach(convertToJSON)}
      </div>
        
        <Table responsive striped bordered hover>
          <thead style={{textAlign: "center"}}>
            <tr>
              <th>Date/Time</th>
              <th>Student Full Name</th>
              <th>Device Hash</th>
            </tr>
          </thead>

          <tbody>
            {jsonObjectsArray.map(student => (
            <tr className={deviceFingerprintsSet.has(student.deviceFingerPrint) ? "bg-danger" : deviceFingerprintsSet.add(student.deviceFingerPrint)}>
              <td>{student.date}</td>
              <td>{student.firstName} {student.lastName}</td>
              <td key={student.deviceFingerPrint}>{student.deviceFingerPrint}</td>
              </tr>))}
          </tbody>
        </Table>
        

      </Modal.Body>

      <Modal.Footer>
        <Button variant="outline-success" onClick={() => {validateAttendance()}}>Submit Students</Button>
        <Button variant="outline-warning" onClick={props.onHide}>CLOSE</Button>
      </Modal.Footer>
      

    </Modal>
            
    {/* Notification known as a 'Toast' that appears when 'Submit Students' button is clicked*/}
    <ToastContainer position="bottom-start">
        <Toast onClose={() => setToast(false)} bg={(jsonObjectsArray.length > 0) ? 'success' : 'danger'} show={toast}  delay={1500} autohide>
          <Toast.Header>
            <IoCheckmarkCircle/>
            <strong>Submission {(jsonObjectsArray.length >0) ? "Successful" : "Failed"}</strong>
          </Toast.Header>
          <Toast.Body style={{color: "white"}}>
            {props.classType} Attendance Submitted {(jsonObjectsArray.length > 0) ? "Successfully" : "Fail"}!
          </Toast.Body>
        </Toast>

      </ToastContainer>
    </>

  );
}

export default AttendanceTakingPopUp;
