import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import ReactTypingEffect from "react-typing-effect";
import Table from "react-bootstrap/Table"
import BarcodeReader from 'react-barcode-reader'
import React from "react";
import { addCourseAttendanceRecord } from "../../utils/doRequest"

function AttendanceTakingPopUp(props) {


  let deviceFingerprintsSet = new Set()
  const [result, setResult] = useState("")
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
  const staff = JSON.parse(localStorage.getItem('lecturer'))


  function submitStudents(){
    const currentStudents = result.slice(2)  


    addCourseAttendanceRecord({
    // object which will be sent to the 'course attendance records' collection
      
        "catalogueID": localStorage.getItem('catalogueID'),
        "courseName": localStorage.getItem('courseName'),
        "staffID": staff.staffID,
        "date": props.date,
        "studyPeriod": localStorage.getItem('studyPeriod'),
        "classType": props.classType,
        "attendance": currentStudents
    }
    );




  }

  return (
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
        <Button variant="outline-success" onClick={() => submitStudents()}>Submit Students</Button>
        <Button variant="outline-warning" onClick={props.onHide}>CLOSE</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AttendanceTakingPopUp;
