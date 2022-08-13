import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StudentAttendanceTable from '../components/StudentAttendanceTable';

function Dashboard() {
    return (
        <Container fluid style={{paddingLeft: 35, paddingRight: 35}}>
          <Row>
            <Col sm={4} style={{backgroundColor: 'green' }}>1 of 2</Col>
            <Col sm={8} style={{backgroundColor: 'pink' }}>2 of 2</Col>
          </Row>
        <div>
          <StudentAttendanceTable />
        </div>
      </Container>
      
    );
}

export default Dashboard