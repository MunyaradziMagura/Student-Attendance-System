import StudentNavigation from "../components/mobile/StudentNavigation";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import QRCode from "../components/mobile/QRCode";
import StudentClasses from "../components/mobile/StudentClasses";
import UserProfile from "../components/mobile/UserProfile";
import React from "react";

function StudentHome() {
  // object containing student information (i.e. id, username, email, attendance etc etc )
  let student = JSON.parse(localStorage.getItem("student"));

  // add name
  student.fullName = `${student.firstName} ${student.lastName}`;
  // load different components depending on the page
  const [page, setPage] = React.useState();
  let pageComponent;

  // which page has been selected
  switch (page) {
    case "Home":
      pageComponent = <QRCode studentInfo={student} />;
      break;

    case "Classes":
      pageComponent = (
        <StudentClasses
          width={window.screen.width}
          attendance={student.attendance}
        />
      );
      break;

    case "Profile":
      pageComponent = (
        <UserProfile
          fullName={student.fullName}
          studentID={student.studentID}
          program={student.program}
        />
      );
      break;

    default:
      pageComponent = <QRCode studentInfo={student} />;
  }

  return (
    <>
      <Container>
        <Row>
          {/* nav */}
          <StudentNavigation
            style={{ backgroundColor: "#0052a0" }}
            fullName={student.fullName}
            setPage={setPage}
          ></StudentNavigation>
        </Row>
        <Row>
          <Container
            style={{
              backgroundColor: "#0052a0",
              width: "100%",
              height: "100%",
            }}
          >
            {/*  body */}
            <Row>
              <Col style={{ width: "100%", height: "100%" }}>
                {/* load the right page */}
                {pageComponent}
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    </>
  );
}

export default StudentHome;
