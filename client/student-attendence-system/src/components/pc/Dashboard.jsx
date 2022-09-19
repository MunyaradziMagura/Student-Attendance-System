import React, { useState } from "react";
import sty from "../styles/Dashboard.module.css";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import YourCourse from "./YourCourse";
import Button from "react-bootstrap/Button";
import StudentAttendanceTable from "./StudentAttendanceTable";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Nav from "react-bootstrap/Nav"


export default function Dashboard() {
  var userData = { userName: localStorage.getItem("name") };
  const lecturer = JSON.parse(localStorage.getItem("lecturer"));
  const [value, onChange] = useState(new Date());
  // take attendance
  const navigate = useNavigate();

  const doLogout = () => {
    localStorage.clear();
    navigate("/Login");
  };

  const [page, setPage] = React.useState();
  let pageComponent;
  let headerComponent;

  // which page has been selected
  switch (page) {
    case "YourCourse":
      pageComponent = <YourCourse courseList={lecturer.courses}/>;
      headerComponent = <Header pageName={"Your Courses"}/>
      break;
    case "StudentSearch":
      pageComponent = <></>; //Should load StudentSearchTable component
      headerComponent = <Header pageName={"Student Search"}/>
      break;
    default:
      pageComponent = <YourCourse courseList={lecturer.courses}/>;
      headerComponent = <Header pageName={"Your Courses"}/>
  }

  return (
    <div className={sty.box}>
      <div className={sty.left}>
        <h2 style={{ textAlign: "center" }}>Welcome {userData.userName}</h2>
        <div className={sty.emailBox}></div>
        <div className={sty.navBox}>
          <Nav className="col-md-12 d-none d-md-block sidebar">
            <Nav.Link 
              style={{color: "#3b4149"}}
              className={sty.navItem}
              href="#YourCourse"
              onClick={() => setPage("YourCourse")}
            > Courses
            </Nav.Link>

          </Nav>
          <div className = {sty.calendar}>
            <Calendar onChange={onChange} value={value} />
          </div>
        </div>
        <div className = {sty.btn}>
          <Button variant="primary" onClick={doLogout}>
            Logout
          </Button>
        </div>
      </div>

      <div className={sty.right}>
        {headerComponent}
        <div className={sty.rightDesc}>{pageComponent}</div>
      </div>
    </div>
  );
}
