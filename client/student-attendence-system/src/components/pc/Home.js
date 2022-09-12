import React from "react";
import AttendanceTakingPopUp from "./AttendanceTakingPopUp";
import Button from "react-bootstrap/Button";
import sty from "../styles/Dashboard.module.css";
export default function Home(props){
    const [takeAttendance, setTakeAttendance] = React.useState(false);
    return(
        <>

        <div style={{color: "black"}}>Lorem ipsum dolor sit amet,consectetur adipiscing elit. Lorem ipsum
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
          Graph Graph Graph</div>
        <div className={sty.rightTable} style={{color: "black"}}>
        <h3>Todays Classes</h3>

        <table border="2">
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
                <td>Systems Design Lecture</td>
                <td>12:00pm - 2:00pm</td>
                <td>17/05/22</td>
                <td>
                    {/* <div className={sty.actionBtn}>Allow Access</div> */}
                    <Button
                    variant="primary"
                    style={{ width: "85%", fontSize: "0.8rem" }}
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
                <td>Systems Design Lecture</td>
                <td>12:00pm - 2:00pm</td>
                <td>17/05/22</td>
                <td>
                    <Button
                    variant="primary"
                    style={{ width: "85%", fontSize: "0.8rem" }}
                    onClick={() => setTakeAttendance(true)}
                    >
                    Launch Attendance Taking
                    </Button>
                </td>
            </tr>
            <tr>
                <td>Systems Design Lecture</td>
                <td>12:00pm - 2:00pm</td>
                <td>17/05/22</td>
                <td>
                    <Button
                    variant="primary"
                    style={{ width: "85%", fontSize: "0.8rem" }}
                    onClick={() => setTakeAttendance(true)}
                    >
                    Launch Attendance Taking
                    </Button>
                </td>
            </tr>
            <tr>
                <td>Systems Design Lecture</td>
                <td>12:00pm - 2:00pm</td>
                <td>17/05/22</td>
                <td>
                    <Button
                    variant="primary"
                    style={{ width: "85%", fontSize: "0.8rem" }}
                    onClick={() => setTakeAttendance(true)}
                    >
                    Launch Attendance Taking
                    </Button>
                </td>
            </tr>
            <tr>
                <td>Systems Design Lecture</td>
                <td>12:00pm - 2:00pm</td>
                <td>17/05/22</td>
            <td>
                <Button
                variant="primary"
                onClick={() => setTakeAttendance(true)}
                style={{ width: "85%", fontSize: "0.8rem" }}
                >
                Launch Attendance Taking
                </Button>
            </td>
            </tr>
        </tbody>
        </table>
        </div>
        </>
    )
}