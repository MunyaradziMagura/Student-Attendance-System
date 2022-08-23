import React, { useEffect, useState } from 'react'
import { IoCheckmarkCircleSharp,  IoCloseCircle, IoSearch} from "react-icons/io5";
import ListGroup from 'react-bootstrap/ListGroup'
//import axios from 'axios'
import Button from 'react-bootstrap/esm/Button';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';

const StudentAttendanceTable = ({studentID}) => {

    const [selection, setSelection] = useState()

    return (
        <div>
            <ListGroup horizontal padding={3}>
                <ListGroupItem variant='primary'>Date</ListGroupItem>
                <ListGroupItem variant='primary'>Class Name</ListGroupItem>
                <ListGroupItem variant='primary'>Attended</ListGroupItem>
                <Button><IoSearch/></Button>
            </ListGroup>
        </div>
    )}

export default StudentAttendanceTable