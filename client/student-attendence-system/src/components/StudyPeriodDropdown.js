import React from "react";
import dashboarStyle from '../styles/lecturerdashboard.css';

import Form from "react-bootstrap/Form"

const StudyPeriodDropdown = () =>{
    return(
        <>  
            <Form.Select>
                <option> All Study Period</option>
                <option value ="SP1">Study Period 1</option>
                <option value ="SP2">Study Period 2</option>
                <option value ="SP3">Study Period 3</option>
                <option value ="SP4">Study Period 4</option>
                <option value ="SP5">Study Period 5</option>
                <option value ="SP6">Study Period 6</option>
                <option value ="SP7">Study Period 7</option>
            </Form.Select>
        </>
    )
}
export default StudyPeriodDropdown;