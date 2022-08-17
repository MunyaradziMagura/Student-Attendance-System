import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StudentAttendanceTable from "../components/StudentAttendanceTable";
import BarcodeScanner from "../components/BarcodeScanner";
//import YourCourse from '../components/YourCourse';
import MainDash from "../components/Dashboard";
function Dashboard() {
  return (
    <>
      <BarcodeScanner />
      {/* <MainDash /> */}
      {/* <StudentAttendanceTable /> */}
    </>
  );
}

export default Dashboard;
