import React, { useState }  from "react";
import Form from "react-bootstrap/Form"
import Courses from "./Courses";
export default function YourCourse ({courseList, forwardFunction}, props) {

        
        const [classes, setClasses] = useState({});
        const [studyPeriod, setStudyPeriod] = useState("")
        
        function classandStudyPeriod (value){
                // set class object
                setClasses(courseList[value])
                // set study period
                setStudyPeriod(value) 
        }

        function detailsPage(){
                forwardFunction()
        }
     return( <>
        <Form.Select onChange={(e) => classandStudyPeriod(e.target.value)}>
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
      <Courses classesObject={classes} sendDetailsPageButton={detailsPage} studyPeriod={studyPeriod}></Courses>
     </>) 
     
}