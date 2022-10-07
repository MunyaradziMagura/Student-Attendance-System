import React from 'react'
import Table from 'react-bootstrap/Table'

const CourseDetailsTable = ({classData}) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Student Name</th>
          <th>Student ID</th>
          <th>Device Hash</th>
        </tr>
      </thead>
      <tbody>
        {/* {Object.keys(classData).map((key) => {
          <tr>
            <td>{classData[key].courseName}</td>
            <td></td>
            <td></td>
          </tr>
        })} */}
      </tbody>
    </Table>
    
  )
}

export default CourseDetailsTable