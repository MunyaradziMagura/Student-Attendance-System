import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import React from "react";
import StudentAttendenceGraph from "./StudentAttendenceGraph";

const StudentClassCard = ({ classesObject, varientList }) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <ListGroup style={{ paddingTop: "1rem", paddingBottom: "100%" }}>
      <ListGroup.Item
        className="d-flex justify-content-between align-items-start"
        id="classHeading"
      >
        CLASSES
        <Badge id="classHeadingBall" bg="primary" pill>
          {Object.keys(classesObject).length}
        </Badge>
      </ListGroup.Item>
      {/* visualise students classes */}
      {
        // loop through object
        Object.keys(classesObject).map((key, index) => (
          // create card clickable background
          <ListGroup.Item
            onClick={() => setModalShow(true)}
            action
            variant={varientList[index + 1]}
            id="studentClasses"
          >
            {/* create card */}
            <Card
              text={
                varientList[index].toLowerCase() === "light" ? "dark" : "white"
              }
              bg="primary"
              border={varientList[index - 1]}
              style={{ width: "100%" }}
            >
              {/* get class name  */}
              <Card.Header id="classDetails">
                {classesObject[key].courseName}
              </Card.Header>

              {/* class details */}
              <ListGroup horizontal>
                <ListGroup.Item id="classDetails" variant={varientList[index]}>
                  Lecturer
                </ListGroup.Item>
                <ListGroup.Item id="classDetails" variant={varientList[index]}>
                  {classesObject[key].lecturerName}
                </ListGroup.Item>
              </ListGroup>

              {/* class date  */}
              <ListGroup horizontal>
                <ListGroup.Item id="classDetails" variant={varientList[index]}>
                  Class Date
                </ListGroup.Item>
                <ListGroup.Item id="classDetails" variant={varientList[index]}>
                  {classesObject[key].date}
                </ListGroup.Item>
              </ListGroup>

              {/* class location */}
              <ListGroup horizontal>
                <ListGroup.Item id="classDetails" variant={varientList[index]}>
                  Location{" "}
                </ListGroup.Item>
                <ListGroup.Item id="classDetails" variant={varientList[index]}>
                  {classesObject[key].location}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </ListGroup.Item>
        ))
      }
      <StudentAttendenceGraph
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </ListGroup>
  );
};

export default StudentClassCard;
