import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/esm/Stack";
import YourCourseTable from "./YourCourseTable";
// var studentDetail = {
//   firstName: "Michael",
//   lastName: "Pham",
//   studentId: "123456789",
//   program: "LHSG",
//   courseEnrolled: {
//     1: {
//       Name: "System Architecture",
//       CategoryCode: "COMP 3024",
//       Units: "4.5",
//       StudyPeriod: "SP1",
//     },
//     2: {
//       Name: "Network Fundamentals",
//       CategoryCode: "INFT 1012",
//       Units: "4.5",
//       StudyPeriod: "SP1",
//     },
//     3: {
//       Name: "Problem Solving and Programming",
//       CategoryCode: "COMP 1039",
//       Units: "4.5",
//       StudyPeriod: "SP2",
//     },
//   },
// };

const StudentSearchProfile = (studentDetail) => {
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
export default StudentSearchProfile;
