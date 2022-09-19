import React, { useEffect, useState }  from "react";
import YourCourseTable from "./YourCourseTable";
import Form from "react-bootstrap/Form"

const YourCourse = ({courseList}, props) =>{
    const [classes, setClasses] = useState({});
    // var coursesObject = {
    //     1: {Name: "System Architecture", CategoryCode: "COMP 3024", Units: "4.5", StudyPeriod: "SP1"},
    //     2: {Name: "Network Fundamentals", CategoryCode: "INFT 1012", Units: "4.5", StudyPeriod: "SP1"},
    //     3: {Name: "Problem Solving and Programming", CategoryCode: "COMP 1039", Units: "4.5", StudyPeriod: "SP2"}
    // }


     return( <>
        <Form.Select onChange={(e) => setClasses(courseList[e.target.value])}>
                <option key = "default" value="SP1">Select A Course</option>
                <option key = "SP1" value = "SP1">Study Period 1</option>
                <option key = "SP2" value = "SP2">Study Period 2</option>
                <option key = "SP3" value = "SP3">Study Period 3</option>
                <option key = "SP4" value = "SP4">Study Period 4</option>
                <option key = "SP5" value = "SP5">Study Period 5</option>
                <option key = "SP6" value = "SP6">Study Period 6</option>
                <option key = "SP7" value = "SP7">Study Period 7</option>
        </Form.Select>
     <div/>
     <YourCourseTable classesObject={classes}></YourCourseTable>
     </>) 
     
}

export default YourCourse;