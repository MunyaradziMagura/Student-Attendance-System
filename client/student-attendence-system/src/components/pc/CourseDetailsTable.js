import React from 'react'
import Table from 'react-bootstrap/Table'
import Badge from "react-bootstrap/Badge";

function CourseDetailsTable({attendanceString, passStudentInfo, command}, props) {
  // split string on ||, then replace single quotes with double quotes, then remove empty spaces from array, then convert string to json object
  let attandanceObject = attendanceString.split("||").map((e) => e.replaceAll("'", '"')).filter((e) => {if(e.length > 1) return true}).map((e) => JSON.parse(e)); 
  // object. key = hash, value = number 
  // javascript dom query, 
  function setStudent(id, firstName, lastName){
    let fullName = firstName + " " + lastName
    passStudentInfo(id, fullName)
    // console.log(`${id} : ${fullName}`)
  }
  
  var modifiedUserList = attandanceObject.map(element => ({...element, yellowFlag: false,redFlag: false})) //This is AttdanceObject has been modified to add another flag attribut
  var uniqueDeviceHash = []; //This list ensure the unique of deviceFingerPrint data only 
  var badListDevice = [];
  var unique = modifiedUserList.filter(element => { //the unique variable is a Set of Array with no duplication of dataset
    const isDuplicate = uniqueDeviceHash.includes(element.deviceFingerPrint);
    if(!isDuplicate){
      uniqueDeviceHash.push(element.deviceFingerPrint);
      return true;
    }
    element.redFlag = true;
    badListDevice.push(element.deviceFingerPrint);
    return false;
  }); 

  var newUnique = modifiedUserList.filter(element =>{
    const isYellowFlag = badListDevice.includes(element.deviceFingerPrint);
    if(isYellowFlag === true && element.redFlag === false){
      element.yellowFlag = true;
      return true;
    }
    return false;
  })
  
  
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
          <th>Device Hash</th>
        </tr>
        
      </thead>
      <tbody>
      
      {modifiedUserList.map(item => 
          (<tr style={{backgroundColor: ""}} id={item.deviceFingerPrint}  onClick={() => setStudent(item.userName, item.firstName, item.lastName)}>
            {item.redFlag === true && <td style={{backgroundColor:"red", color:"white"}}>{item.firstName + " " + item.lastName}</td>}
            {item.redFlag === true && <td style={{backgroundColor:"red", color:"white"}}>{item.userName}</td>}
            {item.redFlag === true && <td style={{backgroundColor:"red", color:"white"}}>{item.deviceFingerPrint}</td>}
            {item.redFlag === false && <td >{item.firstName + " " + item.lastName}</td>}
            {item.redFlag === false && <td >{item.userName}</td>}
            {item.redFlag === false && <td >{item.deviceFingerPrint}</td>}
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
          <th>Device Hash</th>
        </tr>
        
      </thead>
      <tbody>
      
      {modifiedUserList.map(item => 
          (<tr style={{backgroundColor: ""}} id={item.deviceFingerPrint}  onClick={() => setStudent(item.userName, item.firstName, item.lastName)}>
            {item.yellowFlag === true && <td style={{backgroundColor:"yellow", }}>{item.firstName + " " + item.lastName}</td>}
            {item.yellowFlag === true && <td style={{backgroundColor:"yellow", }}>{item.userName}</td>}
            {item.yellowFlag === true && <td style={{backgroundColor:"yellow", }}>{item.deviceFingerPrint}</td>}
            {item.redFlag === true && <td style={{backgroundColor:"red", color:"white"}}>{item.firstName + " " + item.lastName}</td>}
            {item.redFlag === true && <td style={{backgroundColor:"red", color:"white"}}>{item.userName}</td>}
            {item.redFlag === true && <td style={{backgroundColor:"red", color:"white"}}>{item.deviceFingerPrint}</td>}
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
}
CourseDetailsTable.defaultProps = {
  attendanceString: "{'deviceFingerPrint':201586541,'userName':'111111111','firstName':'Tom','lastName':'Smith','date':'Wed Sep 14 2022 16:37:08 GMT+0930 (Australian Central Standard Time)','courseID':null}||"
}

export default CourseDetailsTable