import React from "react";
import {IoLink} from "react-icons/io5"
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button"

const YourCourseTable = ({CourseDetailsPage,classesObject}, props) => {

    return(
        <Table striped bordered hover variant="light">
            <thead>
                <tr>
                    <th>Course Name</th>
                    <th>Catalogue ID</th>
                    <th>No. Students</th>
                    <th>View Course</th>
                </tr>
            </thead>
            <tbody>
            {Object.keys(classesObject).length === 0 ? (
                <tr>
                  <td colSpan={4}>No Data to Display</td>
                </tr>
              ):(
                Object.keys(classesObject).map((key) => (
                    <tr>
                        <td>{classesObject[key].courseName}</td>
                        <td>{classesObject[key].catalogueID}</td>
                        <td>{classesObject[key].students.length}</td>
                        <td class="w-10"><Button onClick={props.CourseDetailsPage}><IoLink></IoLink> View</Button></td>

                    </tr>)
                )
              )
              
            } 
        
            </tbody>

        </Table>
        
    )

}
export default YourCourseTable;