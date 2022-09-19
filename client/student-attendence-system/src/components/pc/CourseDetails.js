import React,  { useState } from 'react'
import {IoLink} from "react-icons/io5"
import Form from "react-bootstrap/Form"
import Table from "react-bootstrap/esm/Table";
import Stack from "react-bootstrap/Stack";
import Button from 'react-bootstrap/esm/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import AttendanceTakingPopUp from "./AttendanceTakingPopUp";
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import ListGroup from 'react-bootstrap/ListGroup'

const CourseDetails = ({backFunction, courseName}, props) => {
    const [takeAttendance, setTakeAttendance] = React.useState(false);

    return(
        <>
            <div>
                <Stack direction="horizontal" gap={2}>
                    <Button onClick={backFunction}>Back</Button>
                    <h4>Class Type:</h4>
                    <Form.Select style = {{width: '20rem'}}>
                        <option value="">All</option>
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
                    >
                    Launch Attendance Taking
                    </Button>
                    {/* show popup */}
                    <AttendanceTakingPopUp
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
      <ListGroup variant="flush">
        <ListGroup.Item>Name</ListGroup.Item>
        <ListGroup.Item>ID</ListGroup.Item>
        <ListGroup.Item>Attendances</ListGroup.Item>
        <ListGroup.Item>Abcenses</ListGroup.Item>

      </ListGroup>
    </Card>
    </CardGroup>

            
            </div>
            <div>
                <h2>Students</h2>
                <Table striped bordered hover variant="light">
                    <thead>
                        <tr>
                            <th style= {{textAlign:'center'}}>StudentID</th>
                            <th style= {{textAlign:'center'}}>Student Name</th>
                            <th style= {{textAlign: 'center'}}>Device Hash</th>
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