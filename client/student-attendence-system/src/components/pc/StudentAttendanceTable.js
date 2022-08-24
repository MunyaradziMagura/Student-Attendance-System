import React from 'react'
import {IoSearch} from "react-icons/io5";
import Table from 'react-bootstrap/esm/Table';
import Stack from 'react-bootstrap/Stack'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const StudentAttendanceTable = ({ attendanceList }) => {

    return (
        <div>
            <Stack direction="horizontal" gap={3}>
                    {/*Form inputs for the course type dropdown box*/}
                    <Form.Label style={{paddingRight: 5, paddingTop: 5, fontWeight: "bold"}}>Course:</Form.Label>
                    <Form.Select key={"courses"} defaultValue={"default"}>
                        <option value="default" disabled>---Choose Course---</option>
                    </Form.Select>

                    {/*Form inputs for the class type dropdown box*/}
                    <Form.Label style={{paddingRight: 5, paddingTop: 5, fontWeight: "bold"}}>Class Type:</Form.Label>
                    <Form.Select defaultValue={"default"}>
                        <option value="default" disabled>---Choose Class Type---</option>
                        
                    </Form.Select>
                    <Button><IoSearch/></Button>    
            </Stack>

                <Table responsive striped bordered>
                    <thead style={{textAlign: "center"}}>
                        <tr>
                            <th>Date</th>
                            <th>Class Name</th>
                            <th>Attended</th>
                        </tr>
                    </thead>
                    <tbody style={{textAlign: "center"}}>
                        {/*  Table data will go here. Display message if no data exists, otherwise populate with data */}
                        {/* {
                        Object.keys(attendanceList).map((key) => (
                            <tr>
                                <td>{attendanceList[key].date}</td>
                                <td>{attendanceList[key].className}</td>
                                <td>{attendanceList[key].attended}</td>
                            </tr>
                        ))
                    } */}
                    <tr>
                        <td>test</td>
                    </tr>
                    </tbody>
                </Table>
        </div>
)}

export default StudentAttendanceTable