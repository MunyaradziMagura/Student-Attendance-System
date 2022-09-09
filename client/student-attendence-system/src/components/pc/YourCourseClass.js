import React from "react";
import {IoBan, IoCheckmarkCircle} from "react-icons/io5"
import Table from "react-bootstrap/esm/Table";

// var studentList = {
//     1: {studentName:"Michael Pham", studentID:"1234556789", attend: false},
//     2: {studentName:"Zachary Anderson", studentID:"125376499", attend: true},
//     3: {studentName:"........", studentID:"........", attend:false},
// }

const YourCourseClass = (studentList) =>{
    return(
        <>
            <div style = {{overflow: "scroll", height: "600px"}}>
                <Table striped bordered hover variant="light">
                        <thead style={{position:'sticky', top: 0}}>
                            <tr>
                                <th style= {{textAlign:'center', position:'sticky', top: 0}}>StudentID</th>
                                <th style= {{textAlign:'center', position:'sticky', top: 0}}>Student Name</th>
                                <th style= {{textAlign:'center', position:'sticky', top: 0}}>Attended</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(studentList).map((key) => (
                                    <tr>
                                        <td style= {{textAlign:'center'}}>{studentList[key].studentID}</td>
                                        <td style= {{textAlign:'center'}}>{studentList[key].studentName}</td>
                                        {studentList[key].attend === true && <td style= {{textAlign:'center'}}><IoCheckmarkCircle size={28}/></td>}
                                        {studentList[key].attend === false && <td style= {{textAlign:'center'}}><IoBan size={26}/></td>}
                                    </tr>
                                )
                                
                                )
                            }
                        </tbody>
                </Table>
            </div>
        </>
    )
}

export default YourCourseClass;