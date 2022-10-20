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

  function cntfunction(attandanceObject, command){
    var count = 0;
    for(var i =0; i < attandanceObject.length; ++i){
      if(attandanceObject[i].redFlag === true || attandanceObject[i].yellowFlag === true){
        count++;
      }
    }
    if(attandanceObject[0].userName === 'N/A'){
      return 0;
    }
    if(command === "highlight" || command === ""){
      return attandanceObject.length;
    }
    return count;
  }
  //console.log(attandanceObject);

  
  if(command === "highlight"){
    return(<>
      <Badge id="classHeadingBall" bg="primary" pill>
        {cntfunction(attandanceObject, command)} Student(s)
      </Badge>
      <div style={{overflow: "scroll", height:"230px"}}>
        <Table striped bordered hover size="sm" > 
          <thead style={{position:'sticky', top: -1,  backgroundColor:'white'}}>
            <tr >
              <th style={{position: 'sticky', top:0}}>Student Name</th>
              <th style={{position: 'sticky', top:0}}>Student ID</th>
              <th style={{position: 'sticky', top:0}}>Device Fingerprint</th>
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
      </div>
    </>)
  }else if(command === "filter"){
    return(<>
      <Badge id="classHeadingBall" bg="primary" pill>
        {cntfunction(attandanceObject, command)} Student(s)
      </Badge>
      <div style={{overflow: "scroll", height:"230px"}}>
        <Table striped bordered hover size="sm"> 
          <thead style = {{position: 'sticky', top:-1,  backgroundColor:'white'}}>
            <tr>
              <th style={{position: 'sticky', top: 0}}>Student Name</th>
              <th style={{position: 'sticky', top: 0}}>Student ID</th>
              <th style={{position: 'sticky', top: 0}}>Device Fingerprint</th>
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
            )}       
          </tbody>
        </Table>
      </div>
    </>)
  }else{
    return (<>
      <Badge id="classHeadingBall" bg="primary" pill>
        {cntfunction(attandanceObject, command)} Student(s)
      </Badge>
      <div style={{overflow: "scroll", height:"230px"}}>
        <Table striped bordered hover size="sm"> 
          <thead bordered style = {{position: 'sticky', top:-1, backgroundColor:'white'}} >
            <tr>
              <th style={{position:'sticky', top:0,  borderBottom: '1px solid #000000'}}>Student Name</th>
              <th style={{position:'sticky', top:0, borderBottom: '1px solid #000000'}}>Student ID</th>
              <th style={{position:'sticky', top:0,  borderBottom: '1px solid #000000'}}>Device Fingerprint</th>
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
      </div>

      </>
    )
  }   
}