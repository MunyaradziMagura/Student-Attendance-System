import StudentNavigation from "../components/StudentNavigation"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function StudentHome() {
  return (
    <div>
      {/* nav */}
      <StudentNavigation userName={"Zack"}></StudentNavigation>
      
      {/* body */}
      <Container>
      <Row>
        {/* left */}
        <Col></Col>
        {/* body */}
        <Col xs={10}>
            hello world
        </Col>
        {/* right */}
        <Col></Col>
      </Row>
      </Container>
    </div>
  )
}

export default StudentHome