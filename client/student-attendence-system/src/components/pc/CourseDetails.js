import React,  { useState } from 'react'
import {IoLink} from "react-icons/io5"
import Form from "react-bootstrap/Form"
import Table from "react-bootstrap/esm/Table";
import Stack from "react-bootstrap/Stack";
import Button from 'react-bootstrap/esm/Button';

const CourseDetails = ({backFunction, courseName}, props) => {

    return(
        <>
            <div>
                <Stack direction="horizontal" gap={2}>
                    <Button onClick={backFunction}>Back</Button>
                    <h1>Class Type:</h1>
                    <Form.Select style = {{width: '20rem'}}>
                        <option value="">All</option>
                        <option value = "Lecture">Lecture</option>
                        <option value = "Practical">Practical</option>
                        <option value = "Tutorial">Tutorial</option>
                        <option value = "Seminar">Seminar</option>
                        <option value = "Workshop">Workshop</option>
                    </Form.Select>
                </Stack>
            </div>
            <div>
            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th style= {{textAlign:'center'}}>Date</th>
                        <th style= {{textAlign:'center'}}>Time</th>
                        <th style= {{textAlign:'center'}}>Location</th>
                        <th style= {{textAlign:'center'}}>Attendance</th>
                    </tr>
                </thead>
                <tbody>
                 
                </tbody>
            </Table>
            </div>
            <div>
                <h2>Course Student List</h2>
                <Table striped bordered hover variant="light">
                    <thead>
                        <tr>
                            <th style= {{textAlign:'center'}}>StudentID</th>
                            <th style= {{textAlign:'center'}}>Student Name</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default CourseDetails