import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import sty from "../styles/Dashboard.module.css"; 
import Nav from "react-bootstrap/Nav";
import Calendar from "react-calendar";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
const SideNavigation = () => {
    var userData = { userName: localStorage.getItem("name") };
    const navigate = useNavigate();
    const [value, onChange] = useState(new Date());

    const doLogout = () => {
      localStorage.clear();
      navigate("/Login");
    };
    return<>
        <div className ={sty.box}>
        <div className={sty.left}>
        <h2 style={{ textAlign: "center" }}>Welcome {userData.userName}</h2>
        <div className={sty.emailBox}></div>
        <div className={sty.navBox}>
          <Nav className="col-md-12 d-none d-md-block sidebar">
          <Nav.Link 
              style={{color: "#3b4149"}}
              className={sty.navItem}
              href="/Test/"
            > Dashboard
            </Nav.Link>
            <Nav.Link 
              style={{color: "#3b4149"}}
              className={sty.navItem}
              href="/Test/YourCourse"
            > Your Courses
            </Nav.Link>
            <Nav.Link 
              style={{color: "#3b4149"}}
              className={sty.navItem}
              href="/Test/StudentAttendance"
            > Student Attendance
            </Nav.Link>
            <Nav.Link
              style={{color: "#3b4149"}} 
              className={sty.navItem}
              href="/Test/StudentSearch"
            >Student Search
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
      </div>
    </>
}
export default SideNavigation;