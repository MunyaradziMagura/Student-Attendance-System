import ListGroup from "react-bootstrap/ListGroup";
import studentStyle from '../styles/student.css'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from "react";
const StudentClassList = ({classes, varientList}) => {

  

  return (
    <ListGroup>
        <ListGroup.Item className="d-flex justify-content-between align-items-start" id="classHeading">CLASSES <Badge id="classHeadingBall" bg="primary" pill>{classes.length}</Badge> </ListGroup.Item>
        {/* visualise students classes */}
        {
            classes.map((user, index) =>  <ListGroup.Item onClick={() => alert("hello")} action variant={varientList[index + 1]} id="studentClasses">
                {user}
            </ListGroup.Item>)
        }
        </ListGroup>
  )
}

export default StudentClassList