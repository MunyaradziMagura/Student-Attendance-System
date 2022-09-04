import React, { useState } from "react";
import sty from "../styles/Dashboard.module.css";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import YourCourse from "./YourCourse";
import Home from "./Home";
import StudentAttendanceTable from "./StudentAttendanceTable";
export default function Dashboard() {
  var exampleData = { firstName: "Zackary", lastName: "Anderson" };
  const [value, onChange] = useState(new Date());
  // take attendance

  const [page, setPage] = React.useState();
  let pageComponent;

  // which page has been selected
  switch (page) {
    case "YourCourse":
      pageComponent = <YourCourse />;
      break;
    case "StudentAttendance":
      pageComponent = <StudentAttendanceTable />;
      break;
    case "StudentSearch":
      pageComponent = <></>; //Should load StudentSearchTable component
      break;

    default:
      pageComponent = <Home />;
  }

  return (
    <div className={sty.box}>
      <div className={sty.left}>
        <h2 style={{ textAlign: "center" }}>
          Welcome {exampleData.firstName},
        </h2>
        <div className={sty.emailBox}></div>
        <div className={sty.navBox}>
          <div
            className={sty.navItem}
            href="#YourCourse"
            onClick={() => setPage("YourCourse")}
          >
            Your Courses
          </div>
          <div
            className={sty.navItem}
            href="#StudentAttendance"
            onClick={() => setPage("StudentAttendance")}
          >
            Student Attendance
          </div>
          <div
            className={sty.navItem}
            href="#StudentSearch"
            onClick={() => setPage("StudentSearch")}
          >
            Student Search
          </div>
          <Calendar onChange={onChange} value={value} />
        </div>
        <div className={sty.btn}>Log Out</div>
      </div>

      <div className={sty.right}>
        <div className={sty.rightTop}>
          <h1>Staff Dashboard</h1>
          <div>Dashboard</div>
        </div>

        <div className={sty.rightDesc}>{pageComponent}</div>
      </div>
    </div>
  );
}
