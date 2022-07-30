import StudentNavigation from "../components/StudentNavigation"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QRCode from '../components/QRCode'
function StudentHome() {
  return (
    <div>
      {/* nav */}
      <StudentNavigation userName={"Tom"}></StudentNavigation>
      
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