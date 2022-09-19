import React from "react";
import {IoLink} from "react-icons/io5"
import Table from "react-bootstrap/Table";

const YourCourseTable = ({classesObject}) => {
    console.log(classesObject);
    // const values = Object.values(classesObject);
    // values.forEach(val=>console.log(val));
    return(
        <Table striped bordered hover variant="light">
            <thead>
                <tr>
                    <th>Course Name</th>
                    <th>Catalogue ID</th>
                    <th>No. Students</th>

                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {Object.keys(classesObject).length === 0 ? (
                <tr>
                  <td colSpan={3}>No Data to Display</td>
                </tr>
              ):(
                Object.keys(classesObject).map((key) => (
                    <tr>
                        <td>{classesObject[key].courseName}</td>
                        <td>{classesObject[key].catalogueID}</td>
                        <td>{classesObject[key].students.length}</td>
                        <td class="w-10"><IoLink></IoLink></td>
                    </tr>)
                )
              )
              
            } 
        
            </tbody>

        </Table>
        
    )

}
export default YourCourseTable;