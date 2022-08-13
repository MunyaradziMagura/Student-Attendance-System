import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { IoCheckmarkCircleSharp,  IoCloseCircle, IoSearch} from "react-icons/io5";
import Form from 'react-bootstrap/Form'
import Stack from 'react-bootstrap/Stack'
//import axios from 'axios'
import Button from 'react-bootstrap/esm/Button';

const StudentAttendanceTable = ({studentID}) => {

    const [selection, setSelection] = useState()

    //Commented out due to causing promise error in Developer console
    // const getAttendance = () => {
    //     axios({
    //         method: "GET",
    //         data: {
    //             student: {
    //                 requestID: studentID 
    //             },
    //             url: "http://localhost:5000/api/students/getAttendance"
    //         }
    //     }) .then((res) => (console.log(res)))
    // }

    {/*Mocked student attendance data to be used for populating the table*/}
    const attendanceData = {
        1: {Date: "17/08/2022", className: "Systems Architecture", attended: false, classType: "Lecture"},
        2: {Date: "25/08/2022", className: "Systems Architecture", attended: true, classType: "Tutorial"},
        3: {Date: "13/09/2022", className: "Systems Architecture", attended: false, classType: "Workshop"},
        4: {Date: "26/09/2022", className: "Data Structures", attended: true, classType: "Practical"},
        5: {Date: "31/09/2022", className: "Systems Analysis", attended: true, classType: "Practical"},
        6: {Date: "11/10/2022", className: "IT Project 2", attended: true, classType: "Lecture"},
    }
    
    return (
        <div>
            <Stack direction="horizontal" gap={3}>
                    {/*Form inputs for the course type dropdown box*/}
                    <Form.Label style={{paddingRight: 5, paddingTop: 5, fontWeight: "bold"}}>Course:</Form.Label>
                    <Form.Select defaultValue={"Select a Course"} onChange={(e) => setSelection(e.target.value)}> {
                        Object.keys(attendanceData).map((key) => (
                            <option>{attendanceData[key].className}</option>       
                        ))
                    }
                    </Form.Select>

                    {/*Form inputs for the class type dropdown box*/}
                    <Form.Label style={{paddingRight: 5, paddingTop: 5, fontWeight: "bold"}}>Class Type:</Form.Label>
                    <Form.Select defaultValue={"Select Course"}>
                        <option>Tutorial</option>
                        <option>Workshop</option>
                        <option>Practical</option>
                        <option>Lecture</option>
                    </Form.Select>
                    <Button><IoSearch/></Button>
            </Stack>
            <Table responsive striped bordered >
                <thead style={{textAlign: "center"}}>
                    <tr>
                        <th>Date</th>
                        <th>Class Name</th>
                        <th>Attended</th>
                    </tr>
                </thead>
                <tbody style={{textAlign: "center"}}>
                    {
                    Object.keys(attendanceData).map((key) => (
                        <tr>
                            <td>{attendanceData[key].Date}</td>
                            <td>{attendanceData[key].className}</td>
                            {/*Ternary statement depending on the value of 'attended' a checkmark or cross icon will appear*/}
                            <td>{attendanceData[key].attended ? <IoCheckmarkCircleSharp/> : <IoCloseCircle/>}</td>
                        </tr>      
                    ))    
                    }
                </tbody>
            </Table>
        </div>
    )}


export default StudentAttendanceTable