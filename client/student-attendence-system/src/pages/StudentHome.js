import StudentNavigation from "../components/mobile/StudentNavigation";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import QRCode from "../components/mobile/QRCode";
import StudentClasses from "../components/mobile/StudentClasses";
import UserProfile from "../components/mobile/UserProfile";
import React from "react";
import { useLocation } from "react-router-dom";

function StudentHome() {
  // get the state from the navigation hook
  const location = useLocation();
  const student = location.state.student;
  console.log(student);
  // load different components depending on the page
  const [page, setPage] = React.useState();
  let pageComponent;

  // which page has been selected
  switch (page) {
    case "Home":
      pageComponent = <QRCode />;
      break;

    case "Classes":
      pageComponent = <StudentClasses width={window.screen.width} />;
      break;

    case "Profile":
      pageComponent = <UserProfile />;
      break;

    default:
      pageComponent = <QRCode />;
  }

  return (
    <Container style={{ backgroundColor: "#0052a0" }}>
      {/* nav */}
      <Row>
        <Col sm={12}>
          <StudentNavigation
            userName={"Kursie"}
            setPage={setPage}
          ></StudentNavigation>
        </Col>
      </Row>
      {/*  body */}
      <Row>
        <Col sm></Col>
        <Col sm={8}>
          {/* load the right page */}
          {pageComponent}
        </Col>
        <Col sm></Col>
      </Row>
      {/* </div> */}
    </Container>
  );
}

export default StudentHome;
