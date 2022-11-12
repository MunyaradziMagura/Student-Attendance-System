import { useEffect,useState,useRef } from "react";
import React from "react";
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getStudentAttendanceDetails } from "../../utils/doRequest";
import { exportFile } from '../exportPDF';


const UserReport = ({ fullName, studentID, program }) => {

    const [data, setData] = useState([]);
    let pdfRef = useRef();



useEffect(() => {
    getStudentData();
}, []);


const onExportPDF = () => {
  exportFile('student pdf', pdfRef.current)
}
const getStudentData =()=>{
  getStudentAttendanceDetails({ attendies: [studentID] }).then(res=>{
    let studentRecordedClasses = []

    // filter for this student only
    res.forEach(element => {
      if(element.attendies.includes(studentID)) studentRecordedClasses.push(element)
    });
    setData(studentRecordedClasses)
 })
 
    
}

  return (
    <>
    <Button  variant="success" onClick={onExportPDF}> Export Class Notes (PDF)</Button>
    <div ref={pdfRef} className="content">
    {
data.map((data) => {
    return (
      <>
      <Container>
      <Row>
        <Col></Col>
        <Col><Card style={{ width: '18rem', marginTop: "1rem" }} className="text-center">
      <Card.Body>
        <Card.Title>{data.courseName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{data.classType} | {data.date}</Card.Subtitle>
        
        <FloatingLabel controlId="floatingTextarea2" label="Leave Notes & Comment Here">
        <Form.Control
          as="textarea"
          placeholder="Leave Notes & Comment Here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      </Card.Body>
    </Card></Col>
        <Col></Col>
      </Row>
    </Container>
      </>

    )
  })
    }
    </div>
    
      
    </>
  );
};

export default UserReport;