import ListGroup from "react-bootstrap/ListGroup";
import studentStyle from '../styles/student.css'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from "react";
const StudentClassCard = ({classesObject, varientList}) => {
    return (
        <ListGroup>
        <ListGroup.Item className="d-flex justify-content-between align-items-start" id="classHeading">CLASSES <Badge id="classHeadingBall" bg="primary" pill>{Object.keys(classesObject).length}</Badge> </ListGroup.Item>
        {/* visualise students classes */}
        {
            // loop through object 
        Object.keys(classesObject).map((key, index) =>
    //  create card clickable background
    <ListGroup.Item onClick={() => alert("hello")} action variant={varientList[index + 1]} id="studentClasses">
        {/* create card */}
        <Card text={varientList[index].toLowerCase() === 'light' ? 'dark' : 'white'} bg="primary" border={varientList[index -1]} style={{ width: '100%', top: "-2rem" }}>
        
        {/* get class name  */}
        <Card.Header id="classDetails">{classesObject[key].Name}</Card.Header>

        {/* class details */}
        <ListGroup horizontal>
        <ListGroup.Item id="classDetails" variant={varientList[index]}>Lecturer</ListGroup.Item>
        <ListGroup.Item id="classDetails" variant={varientList[index]}>{classesObject[key].LectureName}</ListGroup.Item>
        </ListGroup>
        {/* class date  */}
        <ListGroup horizontal>
        <ListGroup.Item id="classDetails" variant={varientList[index]}>Class Date</ListGroup.Item>
        <ListGroup.Item id="classDetails" variant={varientList[index]}>{classesObject[key].Date}</ListGroup.Item>
        </ListGroup>
        {/* class location */}
        <ListGroup horizontal>
        <ListGroup.Item id="classDetails" variant={varientList[index]}>Location </ListGroup.Item>
        <ListGroup.Item id="classDetails" variant={varientList[index]}>{classesObject[key].Location}</ListGroup.Item>
        </ListGroup>
      </Card>

    </ListGroup.Item>
        )
        }
        
        </ListGroup>
    );
}

export default StudentClassCard