import StudentNavigation from "../components/StudentNavigation";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import QRCode from "../components/QRCode";
import StudentClasses from "../components/StudentClasses";
import UserProfile from "../components/UserProfile";
import React from "react";
function StudentHome(props) {
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
    <div style={{ paddingTop: "2rem", backgroundColor: "#0052a0" }}>
      {/* nav */}
      <StudentNavigation
        userName={"Kursie"}
        setPage={setPage}
      ></StudentNavigation>
      <Container>
        <Row>
          <Col></Col>
          {/* body */}
          <Col xs={12}>
            <Container fluid>
              <Row>
                <Col>
                  {/* load the right page */}
                  {pageComponent}
                </Col>
              </Row>
            </Container>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default StudentHome;
