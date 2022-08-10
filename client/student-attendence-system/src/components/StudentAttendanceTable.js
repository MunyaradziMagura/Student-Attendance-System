import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import Dropdown from 'react-bootstrap/Dropdown'
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import axios from "axios"


const StudentAttendanceTable = ({classDate, className, attended}) => {

    return (
            <Table responsive striped bordered >
                <thead style={{textAlign: "center"}}>
                    <tr>
                        <th>Date</th>
                        <th>Class Name</th>
                        <th>Attended</th>
                    </tr>
                </thead>
                <tbody style={{textAlign: "center"}}>
                    <tr>
                        <td>17/08/2022</td>
                        <td>Systems Architecture</td>
                        <td><IoCheckmarkCircleSharp></IoCheckmarkCircleSharp></td>
                    </tr>
                    <tr>
                        <td>24/08/2022</td>
                        <td>Systems Architecture</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>31/08/2022</td>
                        <td>Systems Architecture</td>
                        <td><IoCheckmarkCircleSharp></IoCheckmarkCircleSharp></td>                
                    </tr>
                </tbody>
            </Table>
    )
}

export default StudentAttendanceTable