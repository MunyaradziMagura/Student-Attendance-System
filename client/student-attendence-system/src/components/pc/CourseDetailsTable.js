import React from 'react'
import Table from 'react-bootstrap/Table'
import Badge from "react-bootstrap/Badge";

export default function  CourseDetailsTable({attendanceString, passStudentInfo, command}, props) {
  // split string on ||, then replace single quotes with double quotes, then remove empty spaces from array, then convert string to json object
  let attandanceObject = attendanceString.split("||").map((e) => e.replaceAll("'", '"')).filter((e) => {if(e.length > 1) return true}).map((e) => JSON.parse(e)); 
  // object. key = hash, value = number 
  // javascript dom query, 
  function setStudent(id, firstName, lastName){
    let fullName = firstName + " " + lastName
    passStudentInfo(id, fullName)
    // console.log(`${id} : ${fullName}`)
  }

  
  if(command === "highlight"){
    return(<>
      <Table responsive striped bordered hover size="sm"> 
      <thead>
      {/* NOTE: CHANGE THE BADGE TO SHOW NOTHING WHEN THERE ARE NO STUDENTS */}
      <Badge id="classHeadingBall" bg="primary" pill>
          {attandanceObject.length} Student(s)
        </Badge>
        <tr>
          <th>Student Name</th>
          <th>Student ID</th>
          <th>Device Fingerprint</th>
        </tr>
        
      </thead>
      <tbody>
      
      {attandanceObject.map(item => 
          (<tr style={{backgroundColor: ""}} id={item.deviceFingerPrint}  onClick={() => setStudent(item.userName, item.firstName, item.lastName)}>
            {(item.redFlag === true || item.yellowFlag === true) && <><td style={{backgroundColor:"red", color:"white"}}>{item.firstName + " " + item.lastName}</td>
              <td style={{backgroundColor:"red", color:"white"}}>{item.userName}</td>
              <td style={{backgroundColor:"red", color:"white"}}>{item.deviceFingerPrint}</td></>}
            {(item.redFlag === false && item.yellowFlag === false) && <><td >{item.firstName + " " + item.lastName}</td>
              <td >{item.userName}</td>
              <td >{item.deviceFingerPrint}</td></>}
            {item.deviceFingerPrint === "N/A" && <><td>{item.firstName + " " + item.lastName}</td>
              <td>{item.userName}</td>
              <td>{item.deviceFingerPrint}</td></>}  
          </tr>)
        )
      }
             
      </tbody>
    </Table>
    </>)
  }else if(command === "filter"){
    return(<>
      <Table responsive striped bordered hover size="sm"> 
      <thead>
      {/* NOTE: CHANGE THE BADGE TO SHOW NOTHING WHEN THERE ARE NO STUDENTS */}
      <Badge id="classHeadingBall" bg="primary" pill>
          {attandanceObject.length} Student(s)
        </Badge>
        <tr>
          <th>Student Name</th>
          <th>Student ID</th>
          <th>Device Fingerprint</th>
        </tr>
        
      </thead>
      <tbody>
      
      {attandanceObject.map(item => 
          (<tr style={{backgroundColor: ""}} id={item.deviceFingerPrint}  onClick={() => setStudent(item.userName, item.firstName, item.lastName)}>
            {item.yellowFlag === true && <><td style={{backgroundColor:"yellow", }}>{item.firstName + " " + item.lastName}</td>
              <td style={{backgroundColor:"yellow", }}>{item.userName}</td>
              <td style={{backgroundColor:"yellow", }}>{item.deviceFingerPrint}</td></>}
            {item.redFlag === true && <><td style={{backgroundColor:"red", color:"white"}}>{item.firstName + " " + item.lastName}</td>
              <td style={{backgroundColor:"red", color:"white"}}>{item.userName}</td>
              <td style={{backgroundColor:"red", color:"white"}}>{item.deviceFingerPrint}</td></>}
            {item.deviceFingerPrint === "N/A" && <><td>{item.firstName + " " + item.lastName}</td>
              <td>{item.userName}</td>
              <td>{item.deviceFingerPrint}</td></>}
          </tr>)
        )
      }
             
      </tbody>
    </Table>
    </>)
  }else{
    return (
      // NOTE: MAKE THE TABLE RESPONSIVE I.E. SCROLLABLE 
      <Table responsive striped bordered hover size="sm"> 
        <thead>
        {/* NOTE: CHANGE THE BADGE TO SHOW NOTHING WHEN THERE ARE NO STUDENTS */}
        <Badge id="classHeadingBall" bg="primary" pill>
            {attandanceObject.length} Student(s)
          </Badge>
          <tr>
            <th>Student Name</th>
            <th>Student ID</th>
            <th>Device Fingerprint</th>
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
}