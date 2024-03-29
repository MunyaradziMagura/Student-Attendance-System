import React from 'react'
import Stack from 'react-bootstrap/Stack'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import {IoSearch} from "react-icons/io5";
import Button from 'react-bootstrap/esm/Button';


function StudentSearchTable() {
  return (
    <div style={{padding: 5}}>
        <Stack direction='horizontal' gap={3}>
            <Form.Label style={{paddingRight: 5, paddingTop: 5, fontWeight: "bold"}}>Course:</Form.Label>
            <Form.Select></Form.Select>
            <Form.Label style={{paddingRight: 5, paddingTop: 5, fontWeight: "bold"}}>Student Name:</Form.Label>
            <Form.Control></Form.Control>
            <Button variant="outline-primary"><IoSearch/></Button>
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
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </Table>
    </div>
  
  )
}

export default StudentSearchTable