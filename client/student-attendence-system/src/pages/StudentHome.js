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
      pageComponent = 
        <StudentClasses
          width={window.screen.width}
          attendance={student.attendance}
        />
      ;
      break;

    case "Profile":
      pageComponent = 
        <UserProfile
          fullName={student.fullName}
          studentID={student.studentID}
          program={student.program}
        />
      ;
      break;

    default:
      pageComponent = <QRCode studentInfo={student} />;
  }

  return (
    <>
      <div  style={{backgroundColor:"#0052a0", height:window.screen.height + 25}}>
        <StudentNavigation
              style={{ backgroundColor: "#0052a0", borderstyle:"solid" }}
              fullName={student.fullName}
              setPage={setPage}
        ></StudentNavigation>
          <div>
            {pageComponent}
          </div>
      

      </div>
    </>
  );
}

export default StudentHome;
