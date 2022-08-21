import React, {useEffect, useState} from 'react'
import Stack from 'react-bootstrap/Stack'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import {IoSearch} from "react-icons/io5";
import Button from 'react-bootstrap/esm/Button';

function StudentSearchTable() {
    
    const [students, setStudents] = useState([])

    // useEffect(() => {
    //     fetch("http://localhost:5001/api/students/getAttendance").then(res => {
    //         if(res.ok){
    //             return res.json
    //         }
    //     }).then(jsonRes => setStudents(jsonRes))
    // })

    return (
        <div style={{padding: 5}}>
            <Stack direction='horizontal' gap={3}>
                <Form.Label style={{paddingRight: 5, paddingTop: 5, fontWeight: "bold"}}>Course:</Form.Label>
                <Form.Select></Form.Select>
                <Form.Label style={{paddingRight: 5, paddingTop: 5, fontWeight: "bold"}}>Student Name:</Form.Label>
                <Form.Control></Form.Control>
                <Button><IoSearch/></Button>
            </Stack>
            <Table responsive striped bordered>
                <thead style={{textAlign: "center"}}>
                    <tr>
                        <th>Student ID</th>
                        <th>Student Name</th>
                        <th>Profile Link</th>
                    </tr>
                </thead>
                <tbody>
                        {students.map(student => (
                        <tr>
                            <td>{student.studentID}</td>
                            <td>{student.studentName}</td>
                        </tr>
                        ))}
                </tbody>
            </Table>
        </div>
    )
}

export default StudentSearchTable