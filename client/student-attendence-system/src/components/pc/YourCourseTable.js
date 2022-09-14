import React from "react";
import {IoLink} from "react-icons/io5"
import Table from "react-bootstrap/Table";
import {useNavigate, useParams} from 'react-router-dom';
const YourCourseTable = ({classesObject}) => {
    console.log(classesObject);
    // const values = Object.values(classesObject);
    // values.forEach(val=>console.log(val));
    // let { courseID } = useParams();
    
    const navigate = useNavigate();
    // const navigateDashboard = () =>{
    //     navigate('/Test/YourCourse/${}');
    // }
    return(
        <Table striped bordered hover variant="light">
            <thead>
                <tr>
                    <th>Course Name</th>
                    <th>Category Code</th>
                    <th>Unit</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {
                Object.keys(classesObject).map((key) => (
                    <tr>
                        <td>{classesObject[key].Name}</td>
                        <td>{classesObject[key].CategoryCode}</td>
                        <td>{classesObject[key].Units}</td>
                        <td class="w-10"><button style={{border: "none", background: "none"}} onClick={()=>{navigate('/Test/YourCourse/YourCourseScreen')}}><IoLink></IoLink></button></td>
                    </tr>)
                )
            }
            </tbody>

        </Table>
        
    )

}
export default YourCourseTable;