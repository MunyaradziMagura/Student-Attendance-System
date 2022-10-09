import Modal from "react-bootstrap/Modal";
import AttendenceChart from "./AttendenceChart";
const StudentAttendenceGraph = ({attendanceObject},props) => {
  console.table(attendanceObject);
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
        <AttendenceChart />
      </Modal.Body>
    </Modal>
  );
};

export default StudentAttendenceGraph;
