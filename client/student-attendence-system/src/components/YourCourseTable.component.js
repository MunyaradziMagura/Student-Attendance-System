import React from "react";
import Table from "react-bootstrap/Table";

const YourCourseTable = ({classesObject}) => {
    return(
        <Table bordered>
            <thead>
                <tr>
                    <th>Course Name</th>
                    <th>Category Code</th>
                    <th>Unit</th>
                </tr>
            </thead>
            <tbody>
            {
                Object.keys(classesObject).map((key,index) => (
                    <tr>
                        <td>{classesObject[key].Name}</td>
                        <td>{classesObject[key].CategoryCode}</td>
                        <td>{classesObject[key].Units}</td>
                    </tr>)
                )
            }
            </tbody>
        </Table>
    )

}
export default YourCourseTable;