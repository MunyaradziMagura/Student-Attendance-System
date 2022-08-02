import React from "react";
import YourCourseTable from "./YourCourseTable";
import StudyPeriodDropDown from "./StudyPeriodDropdown";

// function addList(props, result1){
//     var result = {};
//     let i = 0;
//     while(i < props.coursesObject.length){
//         if(this.props.coursesObject[i].StudyPeriod === result1){
//             result.push(this.props.coursesObject[i])
//         }
//     }
//     return result;
// }

function YourCourse(props){
    var coursesObject = {
        1: {Name: "System Architecture", CategoryCode: "COMP 3024", Units: "4.5", StudyPeriod: "SP1"},
        2: {Name: "Network Fundamentals", CategoryCode: "INFT 1012", Units: "4.5", StudyPeriod: "SP1"},
        3: {Name: "Problem Solving and Programming", CategoryCode: "COMP 1039", Units: "4.5", StudyPeriod: "SP2"}
    }
    var result = {}
    // let y = "SP1";
    // addList(coursesObject, y);
    // coursesObject.forEach(coursesObject => {
    //     if(coursesObject.StudyPeriod = "SP1"){
    //         result.push(coursesObject);
    //     }
    // })
     return( <>
     <StudyPeriodDropDown></StudyPeriodDropDown>
     <YourCourseTable classesObject={coursesObject}></YourCourseTable>
     </>) 
     
}

export default YourCourse;