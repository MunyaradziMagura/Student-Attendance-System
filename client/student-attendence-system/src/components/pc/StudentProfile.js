import {React, useState} from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'


export default function  StudentProfile ({userName, fullName, classType, attendancesCount, totalAttendances}, props) {

  return (
    <ListGroup style={{fontWeight: "bold"}}>
        <ListGroup.Item><h2>Student Details</h2></ListGroup.Item>
        <ListGroup.Item>Name: {fullName}</ListGroup.Item>
        <ListGroup.Item>ID: {userName}</ListGroup.Item>
        <ListGroup.Item>{classType} Attendances: {attendancesCount}</ListGroup.Item>
        <ListGroup.Item>Overall Course Attendances: {totalAttendances}</ListGroup.Item>
    </ListGroup> 
  )
}

