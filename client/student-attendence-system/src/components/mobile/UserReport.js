import { useEffect,useState,useRef } from "react";
import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import { getStudentAttendanceDetails } from "../../utils/doRequest";
import { exportPDF } from '../exportPDF';


const UserReport = ({ fullName, studentID, program }) => {

    const [data, setData] = useState([]);
    let pdfRef = useRef();



useEffect(() => {
    getStudentData();
}, []);


const onExportPDF = () => {
  exportPDF('student pdf', pdfRef.current)
}
const getStudentData =()=>{
  getStudentAttendanceDetails({ attendies: [studentID] }).then(res=>{
    
    setData(res)
 })
 
    
}

  return (
    <>
    <div onClick={onExportPDF}> Export PDF</div>
    <div ref={pdfRef} className="content">
    {
data.map((data, index) => {
    return (
      <ListGroup key={index} horizontal style={{ paddingTop: "1rem", width: "100%" }}>
        <ListGroup.Item>courseName</ListGroup.Item>
        <ListGroup.Item style={{ width: "100%" }}>
          {data.courseName}
        </ListGroup.Item>
      </ListGroup>
    )
  })
    }
    </div>
    
      
    </>
  );
};

export default UserReport;