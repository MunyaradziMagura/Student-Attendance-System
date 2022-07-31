import React from "react";
import YourCourseTable from "./YourCourseTable.component";
function YourCourse(props){
    let coursesObject = {
        1: {Name: "System Architecture", CategoryCode: "COMP 3024", Units: "4.5"},
        2: {Name: "Network Fundamentals", CategoryCode: "INFT 1012", Units: "4.5"},
        3: {Name: "Problem Solving and Programming", CategoryCode: "COMP 1039", Units: "4.5"},
    }
    return <><YourCourseTable classesObject={coursesObject}></YourCourseTable></>
}

export default YourCourse;