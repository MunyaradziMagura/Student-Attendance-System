import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
// import image from '../'
function QRCode(props) {
  return (
    <div className="d-flex justify-content-around ">
      <Card style={{ width: '100%', paddingTop: "500px", backgroundColor: "transparent" }}>
        <Card.Img animation="wave" variant="top" src="../src/components/student_0.png" />
        <Card.Body>
          <Card.Title>Class</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Generate Code</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default QRCode