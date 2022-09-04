import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import StudentAttendenceGraph from "./StudentAttendenceGraph";
import React from "react";
const StudentClassList = ({ classes, varientList }) => {
  // show model for visualising a students attendence
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <ListGroup style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
      <ListGroup.Item
        className="d-flex justify-content-between align-items-start"
        id="classHeading"
      >
        CLASSES{" "}
        <Badge id="classHeadingBall" bg="primary" pill>
          {classes.length}
        </Badge>{" "}
      </ListGroup.Item>
      {/* visualise students classes */}
      {classes.map((user, index) => (
        <ListGroup.Item
          onClick={() => setModalShow(true)}
          action
          variant={varientList[index + 1]}
          id="studentClasses"
        >
          {user}
        </ListGroup.Item>
      ))}
      <StudentAttendenceGraph
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </ListGroup>
  );
};

export default StudentClassList;
