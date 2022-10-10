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
import StudentProfile from './StudentProfile';

const CourseDetails = ({backFunction, staffID}, props) => {

  const [takeAttendance, setTakeAttendance] = useState(false);
  const [attendanceData, setAttendanceData] = useState([])
  const [table, setTable] = useState()
  const [SelectedClassType, setSelectedClassType] = useState()


  const [profileData, setProfileData] = useState(["N/A", "Not Selected", "N/A"])
  const [studentProfileComponent, setStudentProfileComponent] = useState()



  const currentDate = new Date();
  let courseName = localStorage.getItem("courseName").replaceAll(" ", "%20")
  let unknownStudents = "{'deviceFingerPrint':'N/A','userName':'N/A','firstName':'Unknown Student','lastName':'','date':'N/A','courseID':null}||"
  let staff = JSON.parse(localStorage.getItem("lecturer"))
  let url = `http://localhost:5001/api/courseAttendanceRecords/getAttendance/${courseName}/${staff.staffID}/`
  
  //Fetches all of the attendance records from the database
  let calendarDate = localStorage.getItem('calendarDate')
  useEffect(() => {
    fetch(url)
    .then((response) => response.json())
    .then((jsonResponse) => setAttendanceData(jsonResponse))
    .catch((error) => console.log(error))
  }, [SelectedClassType])

  function getClassTypeData(_class){
    setSelectedClassType(_class)
  
    // store and filter attendance data 
    let classAttendanceData = attendanceData.filter(type => type.classType === _class).filter(dateFilter => dateFilter.date === calendarDate); // add dynamic date capture 
    // create attendance table
    if(classAttendanceData[0] === undefined) {
      setTable(<CourseDetailsTable attendanceString={unknownStudents}/>)

    }
    else {
      // table containing all attendances for that class
      setTable(generateAttendanceTable(classAttendanceData[0].attendance))
      
    }
    // console.log(_class)
    // console.log(classAttendanceData[0])
    
  }
  useEffect(() => {
    // console.log(newProfileData)
    setStudentProfileComponent(<StudentProfile userName={profileData[0]} fullName={profileData[1]} attendanceCount={profileData[2]} classType={SelectedClassType}/>)

    
  },[profileData])

  function generateAttendanceTable(attendanceString){

    function getStudentCallBack(_studentID, _fullName){
      setProfileData([_studentID, _fullName, "10000"])
    }
      return <CourseDetailsTable attendanceString={attendanceString}  passStudentInfo={getStudentCallBack}/>
  }

   
  function getStudentAttendanceCount(_studentID){
    
    // let attendanceCount = attendanceData.filter((student) => {return student.attendies === _studentID})
    return 300
  }
 
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
                    <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Student Search</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
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
                    {/* student profile */}
                  {/* <StudentProfile userName={profileData[1]} fullName={profileData[0]} attendanceCount={profileData[2]} classType={SelectedClassType}/> */}
                  {studentProfileComponent}
              </Card>
              </CardGroup>
            </div>
            
            <div>
            <div className="d-flex justify-content-start">
              
                <h2>Students</h2>
            </div>
        
                {/* table which shows all students */}
                {table}
            </div>
        </>
    )
}

export default CourseDetails