import React, { useState }  from "react";
import Form from "react-bootstrap/Form"
import Courses from "./Courses";
import sty from "../styles/Dashboard.module.css"; 
export default function YourCourse ({courseList, forwardFunction}, props) {
        const [classes, setClasses] = useState({});
        const [studyPeriod, setStudyPeriod] = useState("")
        const avalibleStudyPeriod = [1,2,3,4,5,6,7]

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
        <div className={sty.form}>
                <div className={sty.formHeader}>
                        <h1>Courses</h1>
                </div>
                <div className={sty.formBody}>
                        <Form.Select onChange={(e) => classandStudyPeriod(e.target.value)}>
                                <option key = "default" value="SP0" selected>Select A Course</option>
                                {avalibleStudyPeriod.map((studyPeriod) => (
                                        <option key={`SP${studyPeriod}`} value={`SP${studyPeriod}`}>Study Period {studyPeriod}</option>
                                ))}
                        </Form.Select>
                        <Courses classesObject={classes} sendDetailsPageButton={detailsPage} studyPeriod={studyPeriod}></Courses>        
                </div>
        </div>
      
     </>) 
     
}