import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import Table from "react-bootstrap/Table";
import { IoLink } from 'react-icons/io5';

const Courses = ({sendDetailsPageButton, classesObject, studyPeriod}) => {
    function sendDetails(index){
        localStorage.setItem('studyPeriod', studyPeriod);
        localStorage.setItem('catalogueID', classesObject[index].catalogueID);
        localStorage.setItem('courseName', classesObject[index].courseName);

        sendDetailsPageButton()
    }
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
                  <td colSpan={5}>No Data to Display</td>
                </tr>
              ):(
                Object.keys(classesObject).map((key) => (
                    <tr>
                        <td>{classesObject[key].courseName}</td>
                        <td>{classesObject[key].catalogueID}</td>
                        <td>{classesObject[key].students.length}</td>
                        <td class="w-10"> <Button onClick={() => sendDetails(key)}><IoLink></IoLink>View</Button></td>

                    </tr>)
                )
              )
              
            }   
            </tbody>     
        
        </Table> 
    )
}

export default Courses