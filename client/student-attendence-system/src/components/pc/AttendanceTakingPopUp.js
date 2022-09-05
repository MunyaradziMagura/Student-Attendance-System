import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ReactTypingEffect from "react-typing-effect";
import ListGroup from "react-bootstrap/ListGroup";
import Table from "react-bootstrap/Table"

import React from "react";

function AttendanceTakingPopUp(props) {
  const viewStudent = () => {
    alert("send the lecturer to the specific students screen");
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <ReactTypingEffect
            speed={70}
            cursor={" "}
            typingDelay={500}
            eraseSpeed={80}
            text={["TAKING ATTENDANCE...", "DO NOT TOUCH KEYBOARD"]}
          />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table responsive striped bordered hover>
          <thead style={{textAlign: "center"}}>
            <th>Date/Time</th>
            <th>Student Full Name</th>
            <th>Device Hash</th>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>Forest Black</td>
              <td>2124312h313</td>
            </tr>
            <tr>
              <td></td>
              <td>Duff Black</td>
              <td>21h3213b12j</td>
            </tr>
            <tr>
              <td></td>
              <td>Peter Black</td>
              <td>1hj4234j3j</td>
            </tr>
            <tr>
              <td></td>
              <td>Jane Black</td>
              <td>2124312h313</td>
            </tr>
          </tbody>
        </Table>
        {/* MAKE THIS INTO ITS OWN COMPONENT SO IT CAN BE RE-USED */}
        {/* list of students who attend */}
        {/* <ListGroup defaultActiveKey="#"> */}
          {/* individual student */}
          {/* <ListGroup.Item action onClick={viewStudent}> */}
            {/* Student information */}

            

            {/* <ListGroup horizontal>
              <ListGroup.Item as="li">Date/Time</ListGroup.Item>
              <ListGroup.Item as="li">Student Full Name</ListGroup.Item>
              <ListGroup.Item as="li">Device Hash</ListGroup.Item>
            </ListGroup>
          </ListGroup.Item>
          <ListGroup.Item action onClick={viewStudent} variant="danger">
            <ListGroup horizontal>
              <ListGroup.Item as="li">Date/Time</ListGroup.Item>
              <ListGroup.Item as="li">Forest Black</ListGroup.Item>
              <ListGroup.Item as="li">2124312h313</ListGroup.Item>
            </ListGroup>
          </ListGroup.Item>
          <ListGroup.Item action onClick={viewStudent}>
            <ListGroup horizontal>
              <ListGroup.Item as="li">17/08/22: 10am</ListGroup.Item>
              <ListGroup.Item as="li">Duff Black</ListGroup.Item>
              <ListGroup.Item as="li">21h3213b12j</ListGroup.Item>
            </ListGroup>
          </ListGroup.Item>
          <ListGroup.Item action onClick={viewStudent}>
            <ListGroup horizontal>
              <ListGroup.Item as="li">Date/Time</ListGroup.Item>
              <ListGroup.Item as="li">Peter Black</ListGroup.Item>
              <ListGroup.Item as="li">1hj4234j3j</ListGroup.Item>
            </ListGroup>
          </ListGroup.Item>
          <ListGroup.Item action onClick={viewStudent} variant="danger">
            <ListGroup horizontal>
              <ListGroup.Item as="li">17/08/22: 10am</ListGroup.Item>
              <ListGroup.Item as="li">Jane Black</ListGroup.Item>
              <ListGroup.Item as="li">2124312h313</ListGroup.Item>
            </ListGroup>
          </ListGroup.Item>
        </ListGroup> */}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>CLOSE</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AttendanceTakingPopUp;
