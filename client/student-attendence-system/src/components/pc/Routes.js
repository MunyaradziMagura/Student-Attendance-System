import React from "react"
import {BrowserRouter,Routes, Route, Navigate} from "react-router-dom"
import InnerContent from "./InnerContent"
import Home from "./Home"
import Header from "./Header"
import YourCourse from "./YourCourse"
import sty from "../styles/Dashboard.module.css";
import YourCourseScreen from "./YourCourseScreen"
import YourCourseClass from "./YourCourseClass"
import StudentAttendanceTable from "./StudentAttendanceTable"
import StudentSearchProfile from "./StudentSearchProfile"
const MainRoutes = () =>{
    return(
    <Routes>
        <Route path="/" element={<><InnerContent></InnerContent></>}>
            <Route path="/" element={<Navigate replace to="Home"/>}/>
            <Route path="Home" element={<><Header pageName={"Dashboard"}/><div className={sty.rightDesc}><Home/></div></>}/>
            <Route path="YourCourse" element={<><Header pageName={"Your Course"}/><div className={sty.rightDesc}><YourCourse/></div></>}/>
                <Route path="/YourCourse/:courseID" element={<><Header pageName={"<Course Name>"}/><div className={sty.rightDesc}><YourCourseScreen/></div></>}/>
                    <Route path="/YourCourse/:courseID/:classID" element={<><Header pageName={"<Class Type - Date, Time>"}/><div className={sty.rightDesc}><YourCourseClass/></div></>}/>
            <Route path="StudentAttendance" element={<><Header pageName={"Student Attendance Search"}/></>}/>
                <Route path="/StudentAttendance/:studentID" element={<><Header pageName={"<Class Type - Date, Time>"}/><div className={sty.rightDesc}><StudentAttendanceTable/></div></>}/>
            <Route path="StudentSearch" element={<><Header pageName={"Student Search"}/><div className={sty.rightDesc}></div></>}/>
                <Route path="/StudentSearch/:studentID" element={<><Header pageName={"Student Profile"}/><div className={sty.rightDesc}><StudentSearchProfile/></div></>}/>
        </Route>
    </Routes>
    );
}

export default MainRoutes;