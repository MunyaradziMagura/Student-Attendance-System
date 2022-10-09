import React,  { useEffect, useState } from 'react'
import Form from "react-bootstrap/Form"
import Stack from "react-bootstrap/Stack";
import Button from 'react-bootstrap/esm/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import AttendanceTakingPopUp from "./AttendanceTakingPopUp";
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import ListGroup from 'react-bootstrap/ListGroup'
import CourseDetailsTable from './CourseDetailsTable';

const CourseDetails = ({backFunction, staffID}, props) => {

  const [takeAttendance, setTakeAttendance] = useState(false);
  const [attendanceData, setAttendanceData] = useState([])
  const [table, setTable] = useState()
  const [SelectedClassType, setSelectedClassType] = useState()
  const currentDate = new Date();
  let courseName = localStorage.getItem("courseName").replaceAll(" ", "%20")

  let staff = JSON.parse(localStorage.getItem("lecturer"))
  let url = `http://localhost:5001/api/courseAttendanceRecords/getAttendance/${courseName}/${staff.staffID}/`
  //let SelectedClassType = ""
  //Fetches all of the attendance records from the database

  useEffect(() => {
    fetch(url)
    .then((response) => response.json())
    .then((jsonResponse) => setAttendanceData(jsonResponse))
    .catch((error) => console.log(error))
  }, [SelectedClassType])

  function getClassTypeData(_class){
    setSelectedClassType(_class)
    // store and filter attendance data 
    let classAttendanceData = attendanceData.filter(type => type.classType === _class).filter(dateFilter => dateFilter.date === "12/10/2022"); // add dynamic date capture 
    // create attendance table
  

    setTable(generateAttendanceTable(classAttendanceData[0].attendance))
    console.log(_class)
    console.log(classAttendanceData)
    
  }

  function generateAttendanceTable(attendanceString){
    if(attendanceString.length > 0){
      return <CourseDetailsTable attendanceString={attendanceString}/>
    }
    return <CourseDetailsTable attendanceString={"{'deviceFingerPrint':N/A,'userName':'N/A','firstName':'N/A','lastName':'N/A','date':'N/A','courseID':null}||"}/>

  }

  // useEffect(() => {
  //   fetch(`http://localhost:5001/api/courseAttendanceRecords/getAttendance/classType=Tutorial_staffID=110205689_courseName=Data_Structures`)
  //   .then((response) => response.json())
  //   .then((jsonResponse) => setAttendanceData(jsonResponse))
  //   .catch((error) => console.log(error))
  // }, [])
      


    return(
        <>
          <h1>{localStorage.getItem('courseName')}</h1>
            <div>
                <Stack direction="horizontal" gap={2}>
                    <Button onClick={backFunction}>Back</Button>
                    <h4>Class Type:</h4>
                    <Form.Select style = {{width: '20rem'}} onChange={(e) => getClassTypeData(e.target.value)}>
                        <option value= "">Select Class Type</option>
                        <option value = "Lecture">Lecture</option>
                        <option value = "Practical">Practical</option>
                        <option value = "Tutorial">Tutorial</option>
                        <option value = "Seminar">Seminar</option>
                        <option value = "Workshop">Workshop</option>
                    </Form.Select>
                    {/* <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Student Search</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup> */}
      <Button
                    variant="primary"
                    style={{ width: "85%", fontSize: "0.8rem" }}
                    onClick={() => setTakeAttendance(true)}
                    disabled = {(SelectedClassType === "") ? true : false}
                    >
                    Launch Attendance Taking
      </Button>
                    {/* show popup */}
                    <AttendanceTakingPopUp
                    classType = {SelectedClassType}
                    date = {`${currentDate.getDate() }/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`}
                    // set popup state 
                    show={takeAttendance}
                    style={{ width: "100%", fontSize: "0.8rem" }}
                    onHide={() => setTakeAttendance(false)}
                    />
                </Stack>
            </div>
            <div>
              <CardGroup>
                  <Card>
                    <Card.Img style={{textAlign: "center", width: "250px", height: "250px"}}variant="top" src="https://www.advsofteng.com/doc/cdpydoc/images/simpleline.png" />
                  </Card>
                  <Card style={{ width: '18rem' }}>
                  <ListGroup>
                      <ListGroup.Item>Name:</ListGroup.Item>
                      <ListGroup.Item>ID:</ListGroup.Item>
                      <ListGroup.Item>Attendances:</ListGroup.Item>
                      <ListGroup.Item>Absences:</ListGroup.Item>
                      <Button>Clear</Button>
                  </ListGroup>
              </Card>
              </CardGroup>
            </div>
            
            <div>
            <div className="d-flex justify-content-start">
              
                <h2>Students</h2>
            </div>
        
                {/* table which shows all students */}
                {/* <CourseDetailsTable attendanceString={"{'deviceFingerPrint':201586541,'userName':'111111111','firstName':'Tom','lastName':'Smith','date':'Wed Sep 14 2022 16:37:08 GMT+0930 (Australian Central Standard Time)','courseID':null}||"}/> */}
                {table}
            </div>
        </>
    )
}

export default CourseDetails