import {React, useState} from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'


function StudentProfile ({userName, fullName, attendanceCount, classType}) {

  return (
    <ListGroup>
        <ListGroup.Item><h2>Student Details</h2></ListGroup.Item>
        <ListGroup.Item>Name: {fullName}</ListGroup.Item>
        <ListGroup.Item>ID: {userName}</ListGroup.Item>
        <ListGroup.Item>{classType} Attendances: {attendanceCount}</ListGroup.Item>
        <ListGroup.Item>Total Attendances: {attendanceCount}</ListGroup.Item>
    </ListGroup> 
  )
}

export default StudentProfile