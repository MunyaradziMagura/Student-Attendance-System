import React, {useEffect, useState}from 'react'
import Stack from 'react-bootstrap/Stack'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import {IoLink} from "react-icons/io5";

var courseList = {
1:{classID: "COMP3024", className:"System Architecture"},
2:{classID: "INFT1012", className: "Network Fundamentals"},
3:{classID: "COMP1234", className: "Data Structure"},
4:{classID: "COMP1039", className: "Problem Solving and Programming"},}

var studentDetail = {
    1:{
        firstName: "Michael",
        lastName: "Pham",
        studentId: "123456789",
        program: "LHSG",
        courseEnrolled: {
            1: {
                Name: "System Architecture",
                CategoryCode: "COMP3024",
                Units: "4.5",
                StudyPeriod: "SP1",
            },
            2: {
                Name: "Network Fundamentals",
                CategoryCode: "INFT1012",
                Units: "4.5",
                StudyPeriod: "SP1",
            },
            3: {
                Name: "Problem Solving and Programming",
                CategoryCode: "COMP1039",
                Units: "4.5",
                StudyPeriod: "SP2",
            },
        },
    }, 2:{
        firstName: "Zackary",
        lastName: "Anderson",
        studentId: "983652780",
        program: "LHSG",
        courseEnrolled: {
            1: {
                Name: "System Architecture",
                CategoryCode: "COMP3024",
                Units: "4.5",
                StudyPeriod: "SP1",
            },
            2: {
                Name: "Network Fundamentals",
                CategoryCode: "INFT1012",
                Units: "4.5",
                StudyPeriod: "SP1",
            },
            3: {
                Name: "Data Structure",
                CategoryCode: "COMP1234",
                Units: "4.5",
                StudyPeriod: "SP2",
            },
        },
    },3:{
        firstName: "Munya",
        lastName: "Munya",
        studentId: "983652780",
        program: "LHSG",
        courseEnrolled: {
            1: {
                Name: "System Architecture",
                CategoryCode: "COMP3024",
                Units: "4.5",
                StudyPeriod: "SP1",
            },
            2: {
                Name: "Network Fundamentals",
                CategoryCode: "INFT1012",
                Units: "4.5",
                StudyPeriod: "SP1",
            },
            3: {
                Name: "Data Structure",
                CategoryCode: "COMP1234",
                Units: "4.5",
                StudyPeriod: "SP2",
            },
        },
    }
  };

function IsEnrolled(courseEnrolled, selectedCourse){
    for (const property in courseEnrolled){
        if(courseEnrolled[property].CategoryCode === selectedCourse) {
            return true;
        }
    }
    return false;
}
function StudentSearchTable() {
    const[filteredList, setFilteredList] = useState(studentDetail);
    const[selectedCourse, setCourse] = useState("");
    const[searchItem, setSearchItem] = useState("");
    var filterByCourse = (filteredData) => {
        if(!selectedCourse){
            return filteredData;
        }
        var flag = true;
        for(const property in filteredData){
            if(IsEnrolled(filteredData[property].courseEnrolled, selectedCourse) === false){
                console.log("Hello");
                flag = false;
            }
        }
        if(flag === true){
            return filteredData;
        }else{
            var filteredCourse = Object.keys(filteredData).filter((id) => {if(IsEnrolled(filteredData[id]?.courseEnrolled, selectedCourse)=== false){
                return true;
                }
            }).reduce((obj, id) => {
                return{
                    ...obj, 
                    [id]: filteredData[id],
    
                };
            }, {});
            return filteredCourse;

        }
    }
    var filterBySearch = (filteredData) =>{
        if(searchItem === ""){
            return filteredData
        }else{
            var filteredSearch = Object.keys(filteredData).filter((id) => filteredData[id].firstName.toLowerCase().includes(searchItem)).reduce((obj, id) => {
                return{
                    ...obj, 
                    [id]: filteredData[id],
    
                };
            }, {});;
            return filteredSearch;
        }
    }
    const handleCourseChange = (event) =>{
        setCourse(event.target.value);
    };
    const handleSearchChange = (event) =>{
        var lowerCase = event.target.value.toLowerCase();
        setSearchItem(lowerCase);
    };
    useEffect(() =>{
        var filteredListData = filterByCourse(studentDetail);
        filteredListData = filterBySearch(filteredListData)
        setFilteredList(filteredListData);
        console.log(searchItem);
    }, [selectedCourse, searchItem]);

    return (
        <div style={{padding: 5}}>
            <Stack direction='horizontal' gap={3}>
                <Form.Label style={{paddingRight: 5, paddingTop: 5, fontWeight: "bold"}}>Course:</Form.Label>
                <Form.Select value={selectedCourse} onChange={handleCourseChange}>
                    <option value = ""> All courses</option>
                    {
                        Object.keys(courseList).map((key) =>(
                            <option value = {courseList[key].classID}>{courseList[key].className}</option>
                        ))
                    }
                </Form.Select>
                <Form.Label style={{paddingRight: 5, paddingTop: 5, fontWeight: "bold"}}>Student Name:</Form.Label>
                <Form.Control onChange={handleSearchChange} value={searchItem}></Form.Control>
            </Stack>
            <Table responsive striped bordered>
                <thead style={{textAlign: "center"}}>
                    <tr>
                        <th>Student ID</th>
                        <th>Student Name</th>
                        <th>Profile Link</th>
                    </tr>
                </thead>
                <tbody>
                {
                    Object.keys(filteredList).map((key) => (
                        <tr>
                            <td style= {{textAlign:'center'}}>{filteredList[key].studentId}</td>
                            <td style= {{textAlign:'center'}}>{filteredList[key].firstName +" " +filteredList[key].lastName}</td>
                            <td class="w-10" style= {{textAlign:'center'}}><IoLink></IoLink></td>
                        </tr>)
                )
            }
                </tbody>
            </Table>
        </div>
  
  )
}

export default StudentSearchTable;