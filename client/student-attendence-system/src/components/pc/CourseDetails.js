import React,  { useEffect, useState } from 'react'
import Form from "react-bootstrap/Form"
import Stack from "react-bootstrap/Stack";
import Button from 'react-bootstrap/esm/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import AttendanceTakingPopUp from "./AttendanceTakingPopUp";
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import CourseDetailsTable from './CourseDetailsTable';
import StudentProfile from './StudentProfile';
import {json, useNavigate } from "react-router-dom";
import AttendanceTables from './AttendanceTables'
export default function CourseDetails ({backFunction, staffID}, props) {

  const [takeAttendance, setTakeAttendance] = useState(false);
  const [attendanceData, setAttendanceData] = useState([])
  const [table, setTable] = useState()
  const [SelectedClassType, setSelectedClassType] = useState("")


  const [profileData, setProfileData] = useState(["N/A", "Not Selected", "N/A"])
  const [studentProfileComponent, setStudentProfileComponent] = useState()

  const navigate = useNavigate();
  const [attendanceGraphs, setAttendanceGraphs] = useState() // this is used to generate attendance data
  // choose class type
  const [selectedGraphClassType,setSelectedGraphClassType] = useState("")


  const [selectSortType, setSortType] = useState(""); //This is used to set the type of sort for the student table
  const [searchItem, setSearchItem] = useState("");

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
  }, [SelectedClassType, takeAttendance])

  //useEffect will start to reload the data set from the database based on the trigger of SelectedClassType (class type dropdown) && takeAttendance (After the popup being open or close).

  //Section of flagging the data
  const flagByAttendance = (attendanceData) =>{
    let attandanceObject = attendanceData.split("||").map((e) => e.replaceAll("'", '"')).filter((e) => {if(e.length > 1) return true}).map((e) => JSON.parse(e)); 
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
  }

  const filteringByClassType = (attendanceData) =>{
    if(!SelectedClassType){
      return unknownStudents;
    }
    let classAttendanceData = attendanceData.filter(type => type.classType === SelectedClassType).filter(dateFilter => dateFilter.date === calendarDate); // add dynamic date capture 
    if(classAttendanceData[0] === undefined){
      return unknownStudents;
    }

    return classAttendanceData[0].attendance;
  };


  // IMPORTANT: REMEMEBER TO COMMENT THIS SECTION
  const filteringBySearch = (attendanceData) => {
    console.log(attendanceData)
    if(attendanceData === undefined){
      return unknownStudents;
    }
    if(searchItem === ""){
      return attendanceData;
    }else{
      let attandanceObject = attendanceData.split("||").map((e) => e.replaceAll("'", '"')).filter((e) => {if(e.length > 1) return true}).map((e) => JSON.parse(e)); 
      var filteredSearch = Object.keys(attandanceObject).filter((id) => attandanceObject[id].firstName.toLowerCase().includes(searchItem)).reduce((obj, id) => {
        return{
            ...obj, 
            [id]: attandanceObject[id]

        };
      }, {});
      
      var jsonString = JSON.stringify(Object.keys(filteredSearch).map((id) => filteredSearch[id]));
      jsonString = jsonString.replace("[", "");
      jsonString = jsonString.replace("]", "||");
      jsonString = jsonString.replace("},", "}||");
      jsonString = jsonString.replaceAll('"', "'");
      if(jsonString === "||"){
        return unknownStudents;
      }
      return jsonString;
    }
  }

  const handleSearchChange = (event) =>{
    var lowerCase = event.target.value.toLowerCase();
    setSearchItem(lowerCase);
  }

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
    //filteredListData= filteringBySearch(filteredListData);//This will filtering the attendance object by comparing between user input and firstname
    //The Section of displaying table of data 
    setTable(generateAttendanceTable(filteredListData, selectSortType)) //This will create a table based on the updating of filterListData
  },[profileData,selectedGraphClassType, selectSortType, searchItem])

  function generateAttendanceTable(attendanceString, commandString){

    function getStudentCallBack(_studentID, _fullName){
      setProfileData([_studentID, _fullName, "000"])
    }
    

    return <CourseDetailsTable attendanceString={attendanceString}  passStudentInfo={getStudentCallBack} command = {commandString}/>
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

    return(
        <>
          <h1>{localStorage.getItem('courseName')}</h1>
            <div>
                <Stack direction="horizontal" gap={2}>
                    <Button onClick={() => navigate(-1)}>Back</Button>
                    <h4>Class Type:</h4>
                    <Form.Select style = {{width: '20rem'}} value = {SelectedClassType} onChange={handleClassTypeChange}>
                        <option value= "">Select Class Type</option>
                        <option value = "Lecture">Lecture</option>
                        <option value = "Practical" >Practical</option>
                        <option value = "Tutorial">Tutorial</option>
                        <option value = "Seminar" >Seminar</option>
                        <option value = "Workshop" >Workshop</option>
                    </Form.Select>
                    
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
                  {/* visualise attendance graphs */}
                  {attendanceGraphs}
                  </Card>
                  <Card style={{ width: '18rem' }}>
                    {/* student profile */}
                  {studentProfileComponent}
              </Card>
              </CardGroup>
            </div>
            <div style={{paddingTop: '1vh'}}>
              <Stack direction="horizontal" gap={2}>
                {/* Search bar is currently down to fix the major bug of searching set data from the QR Code Scanner d */}
                {/* <Form.Control onChange={handleSearchChange} value={searchItem} style = {{width: '50%'}} aria-label="Text input with dropdown button" placeholder='Search for a Student...'/> */}
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