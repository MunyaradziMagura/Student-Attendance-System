import React, { useEffect, useState }  from "react";
import YourCourseTable from "./YourCourseTable";
import Form from "react-bootstrap/Form"

const YourCourse = (courseList, setPage) =>{
    var coursesObject = {
        1: {Name: "System Architecture", CategoryCode: "COMP 3024", Units: "4.5", StudyPeriod: "SP1", CourseID: "12345"},
        2: {Name: "Network Fundamentals", CategoryCode: "INFT 1012", Units: "4.5", StudyPeriod: "SP1", CourseID: "32124"},
        3: {Name: "Problem Solving and Programming", CategoryCode: "COMP 1039", Units: "4.5", StudyPeriod: "SP2", CourseID: "12652"}
    }

    //var coursesObject = courseList;


    const[filteredList, setFilteredList] = useState(coursesObject);
    const[selectedSP, setSP] = useState("");
    var filterBySP = (filteredData) => {
        if(!selectedSP){
            return filteredData;
        }
        var filteredSP =  Object.keys(coursesObject).filter((id) => coursesObject[id].StudyPeriod === selectedSP)
        .reduce((obj, id) => {
            return{
                ...obj,
                [id]: coursesObject[id]
            };
        }, {});
        return filteredSP;
    }
    const handleSPChange = (event) =>{
        setSP(event.target.value);
    };
    useEffect(() =>{
        var filtteredListData = filterBySP(coursesObject);
        setFilteredList(filtteredListData);
    }, [selectedSP]);


     return( <>
        <Form.Select value={selectedSP} onChange={handleSPChange}>
                <option value = ""> All Study Period</option>
                <option value ="SP1">Study Period 1</option>
                <option value ="SP2">Study Period 2</option>
                <option value ="SP3">Study Period 3</option>
                <option value ="SP4">Study Period 4</option>
                <option value ="SP5">Study Period 5</option>
                <option value ="SP6">Study Period 6</option>
                <option value ="SP7">Study Period 7</option>
        </Form.Select>
     <div/>
     <YourCourseTable classesObject={filteredList} setPage={setPage}></YourCourseTable>
     </>) 
     
}

export default YourCourse;