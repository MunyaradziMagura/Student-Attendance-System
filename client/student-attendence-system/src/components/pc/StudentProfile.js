import {React, useState} from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'


function StudentProfile ({userName, fullName, classType, attendancesCount, totalAttendances}) {

  return (
    <ListGroup>
        <ListGroup.Item><h2>Student Details</h2></ListGroup.Item>
        <ListGroup.Item>Name: {fullName}</ListGroup.Item>
        <ListGroup.Item>ID: {userName}</ListGroup.Item>
        <ListGroup.Item>{classType} Attendances: {attendancesCount}</ListGroup.Item>
        <ListGroup.Item>Total Attendances: {totalAttendances}</ListGroup.Item>
    </ListGroup> 
  )
}

export default StudentProfile