import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { IoCheckmarkCircleSharp, IoHandRight } from "react-icons/io5";
import Form from 'react-bootstrap/Form'
import Stack from 'react-bootstrap/Stack'

const StudentAttendanceTable = ({classDate, className, attended}) => {

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
                    <Form.Label style={{paddingRight: 5, paddingTop: 5}}>Course:</Form.Label>
                    <Form.Select defaultValue={"Select Course"}>
                        <option>Systems Architecture</option>
                        <option>IT Project 2</option>
                        <option>Data Structures</option>
                        <option>Systems Analysis</option>
                    </Form.Select>

                    <Form.Label style={{paddingRight: 5, paddingTop: 5}}>Class Type:</Form.Label>
                    <Form.Select defaultValue={"Select Course"}>
                        <option>Tutorial</option>
                        <option>Workshop</option>
                        <option>Practical</option>
                        <option>Lecture</option>
                    </Form.Select>
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
                            <td>{attendanceData[key].attended ? <IoCheckmarkCircleSharp/> : ""}</td>
                        </tr>      
                    ))    
                    }

                </tbody>
            </Table>
        </div>
    )}


export default StudentAttendanceTable