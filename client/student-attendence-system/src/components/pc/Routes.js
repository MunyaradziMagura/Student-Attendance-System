import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import sty from "../styles/Dashboard.module.css";
import InnerContent from "./InnerContent";
import Header from "./Header";
import YourCourse from "./YourCourse";
import CourseDetails from "./CourseDetails";
const MainRoutes = () =>{
    const lecturer = JSON.parse(localStorage.getItem("lecturer"));
    const temp1 = lecturer.courseName;
    console.log(temp1);
    return(
        <Routes>
        <Route path="/" element={<><InnerContent></InnerContent></>}>
            <Route path="/" element={<Navigate replace to="Courses"/>}/>
            <Route path="Courses" element={<><Header pageName={"Your Course"}/><div className={sty.rightDesc}><YourCourse courseList={lecturer.courses}/></div></>}/>
            <Route path="CoursesDetail" element={<><Header pageName={"Course"}/><div className={sty.rightDesc}><CourseDetails courseName={lecturer.courseName} staffID={lecturer.staffID}></CourseDetails></div></>}></Route>
        </Route>
        </Routes>
    )
}

export default MainRoutes;