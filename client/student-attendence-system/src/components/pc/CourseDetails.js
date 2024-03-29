import React,  { useEffect, useState ,useRef} from 'react'
import Form from "react-bootstrap/Form"
import Stack from "react-bootstrap/Stack";
import Button from 'react-bootstrap/esm/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import AttendanceTakingPopUp from "./AttendanceTakingPopUp";
import PDFExportPopUp  from './PDFExportPopup';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import CourseDetailsTable from './CourseDetailsTable';
import StudentProfile from './StudentProfile';
import {json, useNavigate } from "react-router-dom";
import AttendanceTables from './AttendanceTables'
import Badge from "react-bootstrap/Badge";
import sty from "../styles/Dashboard.module.css";
import { exportFile } from '../exportPDF';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
export default function CourseDetails ({backFunction, staffID}, props) {

  const [takeAttendance, setTakeAttendance] = useState(false);
  const [exportShow, setExportShow] = useState(false);
  const [attendanceData, setAttendanceData] = useState([])
  const [table, setTable] = useState()
  const [SelectedClassType, setSelectedClassType] = useState("")

  const classTypeList = ["Lecture","Practical","Tutorial", "Seminar", "Workshop" ]


  const [profileData, setProfileData] = useState(["N/A", "Not Selected", "N/A"])
  const [studentProfileComponent, setStudentProfileComponent] = useState()

  const navigate = useNavigate();
  const [attendanceGraphs, setAttendanceGraphs] = useState() // this is used to generate attendance data
  // choose class type
  const [selectedGraphClassType,setSelectedGraphClassType] = useState("")


  const [selectSortType, setSortType] = useState(""); //This is used to set the type of sort for the student table

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
    .then((jsonResponse) => {
      setAttendanceData(jsonResponse)})
    .catch((error) => console.log(error))
  }, [SelectedClassType, takeAttendance])

  //useEffect will start to reload the data set from the database based on the trigger of SelectedClassType (class type dropdown) && takeAttendance (After the popup being open or close).
  
  //Section of flagging the data
  const flagByAttendance = (attendanceData) =>{
    return attendanceData.map(element1 =>{
      let attandanceObject = element1.split("||").map((e) => e.replaceAll("'", '"')).filter((e) => {if(e.length > 1) return true}).map((e) => JSON.parse(e));
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

      var jsonString = JSON.stringify(Object.keys(modifiedUserList).map((id) => modifiedUserList[id]));
      jsonString = jsonString.replace("[", "");
      jsonString = jsonString.replace("]", "||");
      jsonString = jsonString.replaceAll("},", "}||");
      jsonString = jsonString.replaceAll('"', "'");
      return jsonString;
    })
  }

  const filteringByClassType = (attendanceData) =>{
    var tmpList = [];
    // if there is no selected class type show the unknown students row 
    if(!SelectedClassType){
      tmpList.push(unknownStudents)
      return tmpList;
    }
 let classAttendanceData = attendanceData.filter(type => type.classType === SelectedClassType).filter(dateFilter => dateFilter.date === calendarDate); // add dynamic date capture 
   
    if(classAttendanceData[0] === undefined){
      tmpList.push(unknownStudents)
      return tmpList;
    }
    // append all classAttendanceData data to the tempList. At this point this array should contain all classes which have the corrosponding date & name 
    for(var i =0; i <classAttendanceData.length;++i){
      if(classAttendanceData[i]!=undefined){
        tmpList.push(classAttendanceData[i].attendance);
      }
    }
    return tmpList;
  };

  const handleClassTypeChange =(event)=>{
    setSelectedGraphClassType(event.target.value)
    setSelectedClassType(event.target.value)
  }

  const handleSortTypeChange = (event) =>{
    setSortType(event.target.value);
  }


  useEffect(() => {
    let attendanceCounter = getStudentAttendanceCount(profileData[0], SelectedClassType)
    setStudentProfileComponent(<StudentProfile userName={profileData[0]} fullName={profileData[1]} attendanceCount={profileData[2]} classType={SelectedClassType}  attendancesCount={attendanceCounter[1]} totalAttendances={attendanceCounter[0]}/>)
    // check if we can generate attendance graphical data (Have been combined from the statement below)
    setAttendanceGraphs(<AttendanceTables tabState={selectedGraphClassType} attendanceData={attendanceData}/>)
    //The Section is filtering
    let filteredListData = filteringByClassType(attendanceData); //This will return a list of class data based on selected Class Type
    filteredListData=flagByAttendance(filteredListData);//This will create a flag when it retrieve the Attendance Object from the date picker and class type
    //The Section of displaying table of data
    setTable(generateAttendanceTable(filteredListData, selectSortType)) //This will create a table based on the updating of filterListData
  },[profileData,selectedGraphClassType, selectSortType, attendanceData])

  function generateAttendanceTable(attendanceString, commandString){

    function getStudentCallBack(_studentID, _fullName){
      setProfileData([_studentID, _fullName, "000"])
    }
    if(attendanceString[0].includes('N/A')){
      return (<CourseDetailsTable attendanceString={attendanceString[0]}  passStudentInfo={getStudentCallBack} command = {commandString}/>)
    }


    // NOTE: this needs some updating, as it should not take in a student attendance string but should instead take in a deconstructed object
    // this code is responsible for generating student attendance tables 
    return attendanceString.map((element, numClasses) => {
      return(<>
          <div style={{paddingTop:'10px'}}>
            <div className={sty.form}>

              <div className={sty.formHeader}>
              <OverlayTrigger
          key={'left'}
          placement={'left'}
          overlay={
            <Tooltip id={`tooltip-${'left'}`}>
              <strong>Class Number and Number of Student Attendees</strong>.
            </Tooltip>
          }
        >
                <h1>Class {numClasses + 1} <Badge style={{width: "3rem"}} bg="primary">{element.split("||").length -1}</Badge></h1>
                </OverlayTrigger>

              </div>
              <div className={sty.formBody}>
                <CourseDetailsTable attendanceString={element} passStudentInfo={getStudentCallBack} command = {commandString}/>
              </div>
            </div>
          </div>
        </>
      )
    })
  }
   
  function getStudentAttendanceCount(_studentID, myClass){

    let totalAttendance = 0
    let classAttendance = 0

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

    return [totalAttendance, classAttendance]
  }


  // this function allows for multiple tables to be queried. NOTE: LOOK UP "react ComponentDidMount" to understand this code
  function ComponentDidMount (){

    var input = document.getElementById("myInput");
    var filter = input.value.toUpperCase();
    // get a list of tables
    const tablesList = document.querySelectorAll('table');
    
    for (let i = 0; i < tablesList.length; i++) {
      // plug each table into the mytable function
      mytable(tablesList[i])
    }

    function mytable(tableName){
        // get a list of table rows within the table
        var tr = tableName.getElementsByTagName("tr");
        for (let i = 0; i < tr.length; i++) {
          // for each table row get the first td. in our case this contains the first name and last name
          var td = tr[i].getElementsByTagName("td")[0];
          if (td) {
            // get the contents of the td 
            var studentSearchText = td.textContent || td.innerText;
            // if search text is not in the rows set the display none
            // if the search paramaters are contained within the td then set the display to "" if not then set the display to none
            if (studentSearchText.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }       
        }

      }
    }


    return(
        <>
          <div className={sty.form}>
            <div className={sty.formHeader} style={{display:'flex'}}>
              
            <Button variant="warning" style={{marginLeft:'10px', height:'41px', textAlign:'center'}}href="/Dashboard/Courses">Back</Button>
              <h1 style={{marginLeft:'5px'}}>{localStorage.getItem('courseName')}</h1>
            </div>
            <div className={sty.formBody}>
              <div style={{display:'flex'}}>
                  {/* <Stack direction="horizontal" gap={3}> */}
                      <h4 style={{color: "black", paddingTop: "8px", paddingRight: "5px"}}>Class Type:</h4>
                      <Form.Select style = {{width: '12rem', paddingLeft: "10px"}} value = {SelectedClassType} onChange={handleClassTypeChange}>
                          <option value= "" selected>Select Class Type</option>
                          {classTypeList.map(classType =>  (<option value={`${classType}`} >{classType}</option>))}
                      </Form.Select>

                      {/* button to launch pdf screen */}
                      <Button variant={(SelectedClassType === "") ? "outline-secondary" : "outline-success"} size="lg" disabled = {(SelectedClassType === "") ? true : false} style={{ marginTop:"0.2vh", height: "2.5rem",width: "20%", fontSize: "1rem", marginLeft:'1rem', outlineStyle: "solid", outlineColor: (SelectedClassType === "") ? "" : "green", outlineWidth: "thin" }} onClick={()=>{setExportShow(true)}}>Export Attendance (PDF)</Button>


                    <Button
                      variant={(SelectedClassType === "") ? "outline-secondary" : "primary"}
                      style={{ width: "35%", fontSize: "0.8rem", marginLeft:'auto' }}
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

                      {/* this is where we export course data into a pdf  */}
                  <PDFExportPopUp
                      classType = {SelectedClassType}
                      date = {`${currentDate.getDate() }/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`}
                      // set popup state
                      show={exportShow}
                      table={table}
                      attendanceData={attendanceData}
                      selectedGraphClassType={selectedGraphClassType}
                      style={{ width: "100%", fontSize: "0.8rem" }}
                      onHide={() => setExportShow(false)}
                  />
                  {/* </Stack> */}
              </div>
              <div style={{paddingTop:'10px'}}>
                <CardGroup>
                    <Card>
                    {/* visualise attendance graphs */}
                    {attendanceGraphs}
                    </Card>
                    <Card style={{ width: '18rem' }}>
                      {/* student profile */}
                    {studentProfileComponent}
                </Card>
                </CardGroup>
              </div>
            </div>
          </div>
            <div style={{paddingTop: '1vh'}}>
              <Stack direction="horizontal" gap={2}>
                <InputGroup size="lg" style={{width:'50%'}}>
                  <Form.Control
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder='Search Student'
                    id='myInput'
                    onKeyUp={() => ComponentDidMount()}
                  />
                </InputGroup>
                <Form.Select style = {{width: '20rem'}} value={selectSortType}onChange={handleSortTypeChange}>
                  <option value="">Show All Attendance</option>
                  <option value="highlight">Highlight Duplicate Device Fingerprint</option>
                  <option value="filter">Show Only Duplicate Device Fingerprint</option>
                </Form.Select>
              </Stack>
              
                {/* table which shows all students */}
                {table}
            </div>
        </>
    )
}