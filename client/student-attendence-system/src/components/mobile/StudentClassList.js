import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import StudentAttendenceGraph from "./StudentAttendenceGraph";
import React from "react";
export default function StudentClassList ({ classes }, props) {
  // show model for visualising a students attendence
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <ListGroup style={{ paddingTop: "1rem" }}>
      <ListGroup.Item
        className="d-flex justify-content-between align-items-start"
        id="classHeading"
      >
        CLASSES
        <Badge id="classHeadingBall" bg="primary" pill>
          {Object.keys(classes).length}
        </Badge>
      </ListGroup.Item>
      <div set>
        {/* visualise students classes */}
        {Object.keys(classes).forEach((item) => {
          <ListGroup.Item
            onClick={() => setModalShow(true)}
            action
            variant="primary"
            id="studentClasses"
          >
            {classes[`${item}`].courseName}
          </ListGroup.Item>;
        })}
      </div>
      <StudentAttendenceGraph
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </ListGroup>
  );
};

