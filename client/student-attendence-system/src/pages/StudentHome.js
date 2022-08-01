import StudentNavigation from "../components/StudentNavigation"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QRCode from '../components/QRCode'
import StudentClasses from '../components/StudentClasses'
function StudentHome() {
  return (
    <div>
      {/* nav */}
      <StudentNavigation userName={"Kursie"}></StudentNavigation>
      
      {/* body */}
      <Container>
      <Row>
        {/* left */}
        <Col></Col>
        {/* body */}
        <Col xs={12}>
        <Container fluid>
      <Row>
        <Col>
        {/* <StudentClasses/> */}
          <QRCode/>
        </Col>
      </Row>
    </Container>
        </Col>
        {/* right */}
        <Col></Col>
      </Row>
      </Container>
    </div>
  )
}

export default StudentHome