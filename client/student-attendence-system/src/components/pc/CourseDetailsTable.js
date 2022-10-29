import React from 'react'
import { useRef } from "react";
import Table from 'react-bootstrap/Table'
import Badge from "react-bootstrap/Badge";
import { exportFile } from '../exportPDF';
function CourseDetailsTable({attendanceString, passStudentInfo}, props) {
  // split string on ||, then replace single quotes with double quotes, then remove empty spaces from array, then convert string to json object
  let attandanceObject = attendanceString.split("||").map((e) => e.replaceAll("'", '"')).filter((e) => {if(e.length > 1) return true}).map((e) => JSON.parse(e)); 
  // object. key = hash, value = number 
  // javascript dom query, 
  function setStudent(id, firstName, lastName){
    let fullName = firstName + " " + lastName
    passStudentInfo(id, fullName)
    // console.log(`${id} : ${fullName}`)
  }
  

  let pdfRef = useRef();
  
const onExportPDF = () => {
  exportFile('course pdf', pdfRef.current)
}
  return (
    // NOTE: MAKE THE TABLE RESPONSIVE I.E. SCROLLABLE 
    <Table responsive striped bordered hover size="sm" ref={pdfRef}> 
      <thead>
      {/* NOTE: CHANGE THE BADGE TO SHOW NOTHING WHEN THERE ARE NO STUDENTS */}
      <Badge id="classHeadingBall" bg="primary" pill>
          {attandanceObject.length} Student(s)
        </Badge>
        <div onClick={onExportPDF} > Export PDF</div>
        <tr>
          <th>Student Name</th>
          <th>Student ID</th>
          <th>Device Hash</th>
        </tr>
        
      </thead>
      <tbody>
      
      {attandanceObject.map(item => 
        <tr id={item.deviceFingerPrint}  onClick={() => setStudent(item.userName, item.firstName, item.lastName)}>
          <td>{item.firstName + " " + item.lastName}</td>
          <td>{item.userName}</td>
          <td>{item.deviceFingerPrint}</td>
        </tr>
         )}
      </tbody>
    </Table>
    
  )
}
CourseDetailsTable.defaultProps = {
  attendanceString: "{'deviceFingerPrint':201586541,'userName':'111111111','firstName':'Tom','lastName':'Smith','date':'Wed Sep 14 2022 16:37:08 GMT+0930 (Australian Central Standard Time)','courseID':null}||"
}

export default CourseDetailsTable