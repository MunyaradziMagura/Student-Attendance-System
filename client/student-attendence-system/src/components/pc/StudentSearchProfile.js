import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/esm/Stack";
import YourCourseTable from "./YourCourseTable";

export default function StudentSearchProfile ({studentDetail}, props) {
  return (
    <>
      <Stack direction="horizontal" gap={3}>
        <Card
          style={{
            paddingBottom: "0rem",
            backgroundColor: "white",
            width: "35rem",
          }}
        >
          <h2 style={{ paddingLeft: "1rem", paddingTop: "1rem" }}>
            Student Detail
          </h2>
          <Card.Body style={{ color: "white" }}>
            <ListGroup horizontal style={{ width: "100%" }}>
              <ListGroup.Item style={{ width: "15rem" }}>
                Firstname
              </ListGroup.Item>
              <ListGroup.Item style={{ width: "100%" }}>
                {studentDetail.firstName}
              </ListGroup.Item>
            </ListGroup>

            <ListGroup horizontal style={{ paddingTop: "1rem", width: "100%" }}>
              <ListGroup.Item style={{ width: "15rem" }}>
                Surname
              </ListGroup.Item>
              <ListGroup.Item style={{ width: "100%" }}>
                {studentDetail.lastName}
              </ListGroup.Item>
            </ListGroup>

            <ListGroup horizontal style={{ paddingTop: "1rem", width: "100%" }}>
              <ListGroup.Item style={{ width: "15rem" }}>
                Student ID
              </ListGroup.Item>
              <ListGroup.Item style={{ width: "100%" }}>
                {studentDetail.studentId}
              </ListGroup.Item>
            </ListGroup>

            <ListGroup horizontal style={{ paddingTop: "1rem", width: "100%" }}>
              <ListGroup.Item style={{ width: "15rem" }}>
                Program
              </ListGroup.Item>
              <ListGroup.Item style={{ width: "100%" }}>
                {studentDetail.program}
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <Image
          roundedCircle
          className='rounded-circle"'
          variant="top"
          src="./images/img_avatar1.png"
          style={{
            color: "white",
            padding: "1rem",
            backgroundColor: "transparent",
            height: "300px",
            width: "300px",
          }}
        />
      </Stack>
      <div style={{ paddingTop: "2rem" }}>
        <YourCourseTable classesObject={studentDetail} />
      </div>
    </>
  );
};