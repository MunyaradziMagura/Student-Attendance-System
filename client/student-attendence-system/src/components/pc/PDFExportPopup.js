import React,  { useEffect, useState ,useRef} from 'react'
import Form from "react-bootstrap/Form"
import Stack from "react-bootstrap/Stack";
import Button from 'react-bootstrap/esm/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import Modal from "react-bootstrap/Modal";
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import CourseDetailsTable from './CourseDetailsTable';
import StudentProfile from './StudentProfile';
import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton';
import {useNavigate } from "react-router-dom";
import AttendanceTables from './AttendanceTables'
import TotalClassAttendanceBarChart from './TotalClassAttendanceBarChart';
import { exportFile } from '../exportPDF';
function PDFExportPopUp(props) {


  const [takeAttendance, setTakeAttendance] = useState(false);
  const [attendanceData, setAttendanceData] = useState([])
  const [table, setTable] = useState()
  const [SelectedClassType, setSelectedClassType] = useState("")


  const [profileData, setProfileData] = useState(["N/A", "Not Selected", "N/A"])
  const [studentProfileComponent, setStudentProfileComponent] = useState()

  const navigate = useNavigate();
  
  // choose class type
  const [selectedGraphClassType,setSelectedGraphClassType] = useState("")

  const currentDate = new Date();
  let courseName = localStorage.getItem("courseName").replaceAll(" ", "%20")
  
  
  let unknownStudents = "{'deviceFingerPrint':'N/A','userName':'N/A','firstName':'Unknown Student','lastName':'','date':'N/A','courseID':null}||"
  let staff = JSON.parse(localStorage.getItem("lecturer"))
  let url = `http://localhost:5001/api/courseAttendanceRecords/getAttendance/${courseName}/${staff.staffID}/`
  var userData = { userName: localStorage.getItem("name") };
  //Fetches all of the attendance records from the database
  let calendarDate = localStorage.getItem('calendarDate')
  useEffect(() => {
    fetch(url)
    .then((response) => response.json())
    .then((jsonResponse) =>{

      let classDataTemplate = {
        "name": "Total Attendance",
        "Lecture": 0,
        "Practical": 0,
        "Tutorial": 0,
        "Seminar":  0,
        "Workshop": 0,
    }
    jsonResponse.forEach((e) => {
        classDataTemplate[e.classType] += e.attendies.length
        console.log(e.classType)
        console.log(e.attendies.length)
        // clear classDataTemplate
    })
    let data = [classDataTemplate]
    setAttendanceData(data)

    // store and filter attendance data 
    let classAttendanceData = attendanceData.filter(type => type.classType === selectedGraphClassType).filter(dateFilter => dateFilter.date === calendarDate); // add dynamic date capture 
    // create attendance table
    if(classAttendanceData[0] === undefined) {
      setTable(<CourseDetailsTable attendanceString={unknownStudents}/>)

    }
    else {
      // table containing all attendances for that class
      setTable(generateAttendanceTable(classAttendanceData[0].attendance))
    }
    } )
    .catch((error) => console.log(error))
  }, [SelectedClassType])

  

  let pdfRef = useRef();
  
  const onExportPDF = () => {
    exportFile('course pdf', pdfRef.current)
  }
  const openExportPDF=()=>{

  }
  useEffect(() => {
    let attendanceCounter = getStudentAttendanceCount(profileData[0], SelectedClassType)
    setStudentProfileComponent(<StudentProfile userName={profileData[0]} fullName={profileData[1]} attendanceCount={profileData[2]} classType={SelectedClassType}  attendancesCount={attendanceCounter[1]} totalAttendances={attendanceCounter[0]}/>)
  },[profileData])


  function generateAttendanceTable(attendanceString){

    function getStudentCallBack(_studentID, _fullName){
      setProfileData([_studentID, _fullName, "000"])
    }


    return <CourseDetailsTable attendanceString={attendanceString}  passStudentInfo={getStudentCallBack}/>
  }

   
  function getStudentAttendanceCount(_studentID, myClass){

    let totalAttendance = 0
    let classAttendance = 0
      if(null != attendanceData && attendanceData.length>0){
        attendanceData.forEach((e) => {

          // get total attendances 
          if (e.attendies.indexOf(_studentID) >= 0){
            totalAttendance++
            // get attendances for specific class type
            if(e.classType === myClass) {
    
              classAttendance++
            }
          }
        })
      }
    
    // console.log("Total attendance: " + totalAttendance)
    // console.log("Class attendance: " + classAttendance)
    return [totalAttendance, classAttendance]
  }

  // console.log(SelectedClassType)
 
    return(
        <>
        <Modal
        show={props.show}
        size="xl"
        style={{ width: "100%", fontSize: "0.8rem" }}
        onHide={() => setTakeAttendance(false)}>
          <div ref={pdfRef}>
          <h1 style={{textAlign:'center'}}>{'Student attendance report for' + localStorage.getItem('courseName') + 'class'}</h1>
          
            <div>
                <Stack  gap={2}>  
                <h4  style={{textAlign:'center'}}>Date :{calendarDate}</h4>
                <h4  style={{textAlign:'center'}}>Teacher Name:{userData.userName}</h4>
                <h4  style={{textAlign:'center'}}>Class Type:{props.classType}</h4>                    
                </Stack>
            </div>
            <div>
              <CardGroup>
                  <Card style={{margin:'5%',padding:'5%'}}>
                    <Card.Title>
                    Top students
                    </Card.Title>
                  <p>Top student attendance TBA</p>
                  </Card>

              </CardGroup>

              <CardGroup>
                
              <Card style={{margin:'5%',padding:'5%'}}>
                  <Card.Title>
                  Attendance Class
                    </Card.Title>
                  <TotalClassAttendanceBarChart data={attendanceData}/>
                  </Card>
                  
              </CardGroup>

              <CardGroup>
                 
              <Card style={{margin:'5%',padding:'5%'}}>
                  <Card.Title>
                  Bottom Students
                    </Card.Title>
                  {/* visualise attendance graphs */}
                  
                  <p>Bottom student attendance TBA</p>
                  </Card>
                 
              </CardGroup>

              <CardGroup>
                
                  <Card style={{ width: '18rem',margin:'5%',padding:'5%'}}>
                    {/* student profile */}
                  {studentProfileComponent}
              </Card>
              </CardGroup>
            </div>
            
            <div>
            
          
        
            </div>
          </div>
            
            <Modal.Footer>
        <Button variant="primary" onClick={onExportPDF} >export</Button>
        <Button variant="outline-warning" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
        </Modal>
          
        </>
    )
}

export default PDFExportPopUp;
