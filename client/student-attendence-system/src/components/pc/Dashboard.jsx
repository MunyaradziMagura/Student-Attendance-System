import React, { useState, useEffect } from "react";
import sty from "../styles/Dashboard.module.css";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import Button from "react-bootstrap/Button";
import AttendanceTakingPopUp from "./AttendanceTakingPopUp";
export default function Dashboard() {
 
  var exampleData = { firstName: "Zackary", lastName: "Anderson" };
  const [value, onChange] = useState(new Date());
  // take attendance
  const [takeAttendance, setTakeAttendance] = React.useState(false);

  return (
    <div className={sty.box}>
      <div className={sty.left}>
        <h2 style={{ textAlign: "center" }}>
          Welcome {exampleData.firstName},
        </h2>
        <div className={sty.emailBox}></div>
        <div className={sty.navBox}>
          <div className={sty.navItem}>Your Courses</div>
          <div className={sty.navItem}>Student Attendance</div>
          <div className={sty.navItem}>Student Search</div>
          <Calendar onChange={onChange} value={value} />
        </div>
        <div className={sty.btn}>Log Out</div>
      </div>

      <div className={sty.right}>
        <div className={sty.rightTop}>
          <h1>Staff Dashboard</h1>
          <div>Dashboard</div>
        </div>

        <div className={sty.rightDesc}>
          Lorem ipsum dolor sit amet,consectetur adipiscing elit. Lorem ipsum
          dolor sit amet,consectetur adipiscing elit. Lorem ipsum dolor sit
          amet,consectetur adipiscing elit. Lorem ipsum dolor sit
          amet,consectetur adipiscing elit. Lorem ipsum dolor sit
          amet,consectetur adipiscing elit. Lorem ipsum dolor sit
          amet,consectetur adipiscing elit. Lorem ipsum dolor sit
          amet,consectetur adipiscing elit. Lorem ipsum dolor sit
          amet,consectetur adipiscing elit. Lorem ipsum dolor sit
          amet,consectetur adipiscing elit. Lorem ipsum dolor sit
          amet,consectetur adipiscing elit. Lorem ipsum dolor sit
          amet,consectetur adipiscing elit. Lorem ipsum dolor sit
          amet,consectetur adipiscing elit. Graph Graph Graph Graph Graph Graph
          Graph Graph Graph
        </div>

        <div className={sty.rightTable}>
          <h3>Todays Classes</h3>

          <table border="0">
            <thead>
              <tr>
                <th>Class Name</th>
                <th>Time</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Systems Desgin Lecture</td>
                <td>12:00pm - 2:00pm</td>
                <td>17/05/22</td>
                <td>
                  {/* <div className={sty.actionBtn}>Allow Access</div> */}
                  <Button
                    variant="primary"
                    style={{ width: "100%", fontSize: "0.8rem" }}
                    onClick={() => setTakeAttendance(true)}
                  >
                    Launch Attendance Taking
                  </Button>
                  {/* show popup */}
                  <AttendanceTakingPopUp
                    show={takeAttendance}
                    style={{ width: "100%", fontSize: "0.8rem" }}
                    onHide={() => setTakeAttendance(false)}
                  />
                </td>
              </tr>
              <tr>
                <td>Systems Desgin Lecture</td>
                <td>12:00pm - 2:00pm</td>
                <td>17/05/22</td>
                <td>
                  <Button
                    variant="primary"
                    style={{ width: "100%", fontSize: "0.8rem" }}
                    onClick={() => setTakeAttendance(true)}
                  >
                    Launch Attendance Taking
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Systems Desgin Lecture</td>
                <td>12:00pm - 2:00pm</td>
                <td>17/05/22</td>
                <td>
                  <Button
                    variant="primary"
                    style={{ width: "100%", fontSize: "0.7rem" }}
                    onClick={() => setTakeAttendance(true)}
                  >
                    Launch Attendance Taking
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Systems Desgin Lecture</td>
                <td>12:00pm - 2:00pm</td>
                <td>17/05/22</td>
                <td>
                  <Button
                    variant="primary"
                    style={{ width: "80%", fontSize: "0.8rem" }}
                    onClick={() => setTakeAttendance(true)}
                  >
                    Launch Attendance Taking
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Systems Desgin Lecture</td>
                <td>12:00pm - 2:00pm</td>
                <td>17/05/22</td>
                <td>
                  <Button
                    variant="primary"
                    onClick={() => setTakeAttendance(true)}
                    style={{ width: "80%", fontSize: "0.8rem" }}
                  >
                    Launch Attendance Taking
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
