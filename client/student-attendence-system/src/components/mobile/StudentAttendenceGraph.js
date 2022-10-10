import Modal from "react-bootstrap/Modal";
import AttendenceChart from "./AttendenceChart";
const StudentAttendenceGraph = (props) => {
  //console.table(props.props);
  var newClassesObject = {};
  var temp1 = structuredClone(props.props);
  //console.log(temp1);
  newClassesObject = Object.keys(temp1).map((key) => {
    return{...newClassesObject,
        [key]: {date: temp1[key].date, attendance: temp1[key].attendance}
    }
  },{})
 
  return (  
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <b style={{ color: "white" }}>Your Attendence</b>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* visualise chart */}
        <AttendenceChart props={newClassesObject}/>
      </Modal.Body>
    </Modal>
  );
};

export default StudentAttendenceGraph;
