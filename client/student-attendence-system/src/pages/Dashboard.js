import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import YourCourse from '../components/YourCourse';
function Dashboard() {
    return (
      <div>
        <Container fluid style={{paddingLeft: 35, paddingRight: 35}}>
        <Row>
          <Col sm={4} style={{backgroundColor: 'green' }}>1 of 2</Col>
          <Col sm={8} style={{backgroundColor: 'pink' }}>2 of 2</Col>
        </Row>
      </Container>
      <YourCourse/>
      </div>
    );
}

export default Dashboard