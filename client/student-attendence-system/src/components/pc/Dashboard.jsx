import React, { useState } from "react";
import sty from "../styles/Dashboard.module.css";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import YourCourse from "./YourCourse";
import CourseDetails from "./CourseDetails";
import Button from "react-bootstrap/Button";
// import StudentAttendanceTable from "./StudentAttendanceTable";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Nav from "react-bootstrap/Nav"


export default function Dashboard() {
  
  
  var userData = { userName: localStorage.getItem("name") };
  const lecturer = JSON.parse(localStorage.getItem("lecturer"));
  const [value, onChange] = useState(new Date());
  var calendarDate = `${value.getDate()}/${value.getMonth() + 1}/${value.getFullYear()}`
  localStorage.setItem("calendarDate", calendarDate) // set calendar date to local storage 
  // take attendance
  const navigate = useNavigate();

  const doLogout = () => {
    localStorage.clear();
    navigate("/Login");
  };
  
  const [page, setPage] = React.useState("YourCourse");

  let pageComponent; // loads content to the left of the page
  let headerComponent;

  // function to change the rendering component 
 
  // which page has been selected
  switch (page) {
    case "YourCourse":
      pageComponent = <YourCourse courseList={lecturer.courses} forwardFunction={() => setPage("CourseDetails")}/>;

      // pageComponent = <Courses classesObject={JSON.stringify(lecturer.courses)} backFunction={() => setPage("CourseDetails")} />;

      headerComponent = <Header pageName={"Your Courses"}/>
      break;
    case "StudentSearch":
      pageComponent = <></>; //Should load StudentSearchTable component
      headerComponent = <Header pageName={"Student Search"}/>
      break;
    case "CourseDetails":
        pageComponent = <CourseDetails courseName={lecturer.courseName} staffID={lecturer.staffID} backFunction={() => setPage("YourCourse")} />
        headerComponent = <Header pageName={"Course Details"}/>
        break;

    default:
      pageComponent = <YourCourse/>;
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
