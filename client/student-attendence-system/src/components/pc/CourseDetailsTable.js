import React from 'react'
import Table from 'react-bootstrap/Table'


function CourseDetailsTable({attendanceString}, props) {
  // split string on ||, then replace single quotes with double quotes, then remove empty spaces from array, then convert string to json object
  let attandanceArray = attendanceString.split("||").map((e) => e.replaceAll("'", '"')).filter((e) => {if(e.length > 1) return true}).map((e) => JSON.parse(e));
  console.log(attandanceArray)
  // let attandanceObject = 
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
        <tr>
          {/* <td></td>
          <td></td>
          <td></td> */}
        </tr>
      </tbody>
    </Table>
    
  )
}

export default CourseDetailsTable