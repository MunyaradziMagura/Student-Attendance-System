import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import ReactTypingEffect from "react-typing-effect";
import Table from "react-bootstrap/Table"
import BarcodeReader from 'react-barcode-reader'
import React from "react";
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'
import { addCourseAttendanceRecord } from "../../utils/doRequest"
import {IoCheckmarkCircle, IoCloseCircle} from 'react-icons/io5'


export default function AttendanceTakingPopUp(props) {


  let deviceFingerprintsSet = new Set()
  const [result, setResult] = useState("")
  const [showToast, setShowToast] = useState(false) //State variables for the toast notification
  var array = []
  var jsonObjectsArraySet = new Set()
  var jsonObjectsArray = [] // stores student objects scanned in 
  var attendies = [] //Array to store student usernames/IDs

  const [getArray,setArray] = useState([]);
  const [getJsonObjectsArraySet, setJsonObjectsArraySet] = useState(new Set());
  const [getJsonObjectsArray,setJsonObjectsArray] = useState([]);
  const [getAttendies,setAttendies] = useState([]);

  function convertToJSON(element) {
    try {
      let jsonFormat = JSON.parse(element)
      
      var qrKeys = ["deviceFingerPrint", "userName", "firstName", "lastName", "date", "courseID"]
      let keys = Object.keys(jsonFormat)

      if(qrKeys.length !== keys.length) {
        console.log(`Scanned QR code key size mismatch, expected ${qrKeys.length} but got ${keys.length}`)
        return false
      }


      keys.forEach((key, index) => {
        if(key !== qrKeys[index]) {
          console.log(`Key mismatch error. Expected ${qrKeys[index]}, but got ${key}`)
          return false
        }
      })
        
      // check if the person has already been scanned. if not then add their information
      if(!(jsonObjectsArraySet.has(JSON.stringify(jsonFormat)))){

        jsonObjectsArraySet.add(JSON.stringify(jsonFormat))
        attendies.push(jsonFormat.userName)
        jsonObjectsArray.push(jsonFormat);
      }
  } catch(error) {
    return false
    }
  }

  const staff = JSON.parse(localStorage.getItem('lecturer'))



  function submitStudents(){
    // console.log("Delete Section");
    setShowToast(true)
    let students = "";

    getJsonObjectsArray.forEach(e => {
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
        "attendies": attendies,
        "classType": props.classType,
        "attendance": students
    })
    
  // clear attendance
  setResult("");
  setJsonObjectsArray([]);
  array = []
  jsonObjectsArraySet = new Set()
  jsonObjectsArray = []
  attendies = []

};
  
  const splittingResult = (jsonObjectsArray) =>{
    if(result === ""){
      return [];
    }
    // Splits our array on the '||' salt
    array = result.split("||")

    // Filters out the initial array starting value of an empty string, returning only non-empty array elements
    array = array.filter(element => {            
        return element !== '';
    })

    // For each element in the array, convert each into JSON format 
    array.forEach(convertToJSON);
    return jsonObjectsArray;
  } 

  const[isSubmit, setSubmit] = useState(false);
  const handleSubmit = (e) =>{
    submitStudents();
    setSubmit(true);
  }
  useEffect(()=>{
    var tmp = jsonObjectsArray;
    tmp = splittingResult(tmp);
    setJsonObjectsArray(tmp);
  },[isSubmit,result]);

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
            text={[`TAKING ATTENDANCE... DO NOT TOUCH KEYBOARD`]}
          />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
      <div style={{display: "none"}}>
            
            <BarcodeReader minLength={48} //Minimum number of characters that must be scanned before input will be read
                onScan={(data) => setResult(result + "||" + data)} //Concatenates a 'salt' at the end of our strings
            />

        {/* Splits our array on the '||' salt
        {array = result.split("||")}

         Filters out the initial array starting value of an empty string, returning only non-empty array elements
        {array = array.filter(element => {            
            return element !== '';
        })}

         For each element in the array, convert each into JSON format
        {array.forEach(convertToJSON)} */}
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
            {getJsonObjectsArray.map(student => (
            <tr className={deviceFingerprintsSet.has(student.deviceFingerPrint) ? "bg-danger" : deviceFingerprintsSet.add(student.deviceFingerPrint)}>
              <td>{student.date}</td>
              <td>{student.firstName} {student.lastName}</td>
              <td key={student.deviceFingerPrint}>{student.deviceFingerPrint}</td>
              </tr>))}
          </tbody>
        </Table>
        

      </Modal.Body>

      <Modal.Footer>
        <Button variant="outline-primary" disabled={(getJsonObjectsArray.length === 0) ? true: false} onClick={handleSubmit}>Submit Students</Button>
        <Button variant="outline-warning" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
      

    </Modal>
            
    {/* Notification known as a 'Toast' that appears when 'Submit Students' button is clicked*/}
    <ToastContainer position="bottom-start">
        <Toast onClose={() => setShowToast(false)} bg={'success'} show={showToast}  delay={2500} autohide>
          <Toast.Header>
            {(jsonObjectsArray.length >0) ? <IoCheckmarkCircle/> : <IoCloseCircle/>}
            <strong>Submission Successful</strong>
          </Toast.Header>
          <Toast.Body style={{color: "white"}}>
            {props.classType} Attendance Submitted Successfully!
          </Toast.Body>
        </Toast>

      </ToastContainer>
    </>

  );
}