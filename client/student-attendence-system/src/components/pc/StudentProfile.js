import {React, useState} from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'


const StudentProfile = ({userName, fullName, attendanceCount}) => {

    
    const [studentDetails, setStudentDetails] = useState([userName, fullName, attendanceCount])
    function clear(){
        setStudentDetails(["N/A", "Not Selected", "N/A"])
    }
  return (
    <>
    <ListGroup>
        <ListGroup.Item>Name: {studentDetails[1]}</ListGroup.Item>
        <ListGroup.Item>ID: {studentDetails[0]}</ListGroup.Item>
        <ListGroup.Item>Attendances: {studentDetails[2]}</ListGroup.Item>
        <Button onClick={() => clear()}>Clear</Button>
    </ListGroup> 
    </>
  )
}

export default StudentProfile