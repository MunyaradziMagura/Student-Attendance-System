import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import ReactTypingEffect from "react-typing-effect";
import Table from "react-bootstrap/Table"
import BarcodeReader from 'react-barcode-reader'
import React from "react";

function AttendanceTakingPopUp(props, date) {

  const [result, setResult] = useState("")
    var array = []
    var jsonObjectsArray = []

    function convertToJSON(element) {
      let jsonFormat = JSON.parse(element)
      // console.log(jsonFormat)
      jsonObjectsArray.push(jsonFormat)
      // jsonObjectsArray.pop()
      console.log(jsonObjectsArray)
      
  }

  const viewStudent = () => {
    alert("send the lecturer to the specific students screen");
  };

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
          <tr>
              

            </tr>
            {jsonObjectsArray.map(student => (<tr><th key={student.deviceFingerPrint}></th></tr>))}

            {/* <tr>
              <td>{props.date}</td>
              <td>Forest Black</td>
              <td>2124312h313</td>
            </tr>
            <tr>
              <td>{props.date}</td>
              <td>Duff Black</td>
              <td>21h3213b12j</td>
            </tr>
            <tr>
              <td>{props.date}</td>
              <td>Peter Black</td>
              <td>1hj4234j3j</td>
            </tr>
            <tr>
              <td>{props.date}</td>
              <td>Jane Black</td>
              <td>2124312h313</td>
            </tr> */}
          </tbody>
        </Table>
        

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>CLOSE</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AttendanceTakingPopUp;
