import React, { useEffect, useState } from "react";
import {IoLink} from "react-icons/io5"
import Form from "react-bootstrap/Form"
import Table from "react-bootstrap/esm/Table";
import Stack from "react-bootstrap/Stack";
// var courseDetail = {
//     1: {Date: "19/04/22", Time: "2:00pm - 4:00pm", Location: "MM2-03", classType: "Lecture"},
//     2: {Date: "26/04/22", Time: "2:00pm - 4:00pm", Location: "MM2-03", classType: "Practical"},
//     3: {Date: "03/05/22", Time: "2:00pm - 4:00pm", Location: "MM2-03", classType: "Tutorial"},
//     4: {Date: "10/05/22", Time: "2:00pm - 4:00pm", Location: "MM2-03", classType: "Seminar"},
//     5: {Date: "17/05/22", Time: "2:00pm - 4:00pm", Location: "MM2-03", classType: "Workshop"},
//     6: {Date: "17/05/22", Time: "2:00pm - 4:00pm", Location: "MM2-03", classType: "Lecture"},
// }
// var studentList = {
//     1: {studentName:"Michael Pham", studentID:"1234556789"}
// }
const YourCourseScreen = (courseDetail, studentList) =>{
    const[filteredList, setFilteredList] = useState(courseDetail);
    const[selectedClass, setSelectedClass] = useState("");
    var filterByClass = (filteredData) => {
        if(!selectedClass){
            return filteredData;
        }
        var filteredCourseDetail =  Object.keys(courseDetail).filter((id) => courseDetail[id].classType === selectedClass)
        .reduce((obj, id) => {
            return{
                ...obj,
                [id]: courseDetail[id]
            };
        }, {});
        return filteredCourseDetail;
    }
    const handleClassTypeChange = (event) =>{
        setSelectedClass(event.target.value);
    };
    useEffect(() =>{
        var filtteredListData = filterByClass(courseDetail);
        setFilteredList(filtteredListData);
    }, [selectedClass]);
    return(
        <>
        <style type ="text/css">
            {`
            h1{
                color:black;
                size:13px;
            }
            h2{
                color:black;
                size:11px;
            }
            td, th{
                textAlign:center;
            }
            `}
        </style>
            <div>
                <Stack direction="horizontal" gap={2}>
                    <h1>Class Type:</h1>
                    <Form.Select style = {{width: '20rem'}} value={selectedClass} onChange={handleClassTypeChange}>
                        <option value="">All</option>
                        <option value = "Lecture">Lecture</option>
                        <option value = "Practical">Practical</option>
                        <option value = "Tutorial">Tutorial</option>
                        <option value = "Seminar">Seminar</option>
                        <option value = "Workshop">Workshop</option>
                    </Form.Select>
                </Stack>
            </div>
            <div>
            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th style= {{textAlign:'center'}}>Date</th>
                        <th style= {{textAlign:'center'}}>Time</th>
                        <th style= {{textAlign:'center'}}>Location</th>
                        <th style= {{textAlign:'center'}}>Attendance</th>
                    </tr>
                </thead>
                <tbody>
                {
                Object.keys(filteredList).map((key) => (
                    <tr>
                        <td style= {{textAlign:'center'}}>{courseDetail[key].Date}</td>
                        <td style= {{textAlign:'center'}}>{courseDetail[key].Time}</td>
                        <td style= {{textAlign:'center'}}>{courseDetail[key].Location}</td>
                        <td style= {{textAlign:'center'}} class="w-10"><IoLink></IoLink></td>
                    </tr>)
                )
                } 
                </tbody>
            </Table>
            </div>
            <div>
                <h2>Course Student List</h2>
                <Table striped bordered hover variant="light">
                    <thead>
                        <tr>
                            <th style= {{textAlign:'center'}}>StudentID</th>
                            <th style= {{textAlign:'center'}}>Student Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        Object.keys(studentList).map((key) =>(
                            <tr>
                                <td style= {{textAlign:'center'}}>{studentList[key].studentID}</td>
                                <td style= {{textAlign:'center'}}>{studentList[key].studentName}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    )
}
export default YourCourseScreen;