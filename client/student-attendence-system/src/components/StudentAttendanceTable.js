import React from 'react'
import Table from 'react-bootstrap/Table'
import Dropdown from 'react-bootstrap/Dropdown'

const StudentAttendanceTable = (props) => {
  return (
    <div>
        <Table striped>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Class name</th>
                    <th>Attended</th>
                </tr>
            </thead>
            <tbody style={{align: "center"}}>
                <tr>
                    <td>17/08/2022</td>
                    <td>Systems Architecture</td>
                    <td>true</td>
                </tr>
            </tbody>
        </Table>
    </div>
  )
}

export default StudentAttendanceTable