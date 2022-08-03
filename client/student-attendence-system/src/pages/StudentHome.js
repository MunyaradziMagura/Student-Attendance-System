import StudentNavigation from "../components/StudentNavigation"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QRCode from '../components/QRCode'
import StudentClasses from '../components/StudentClasses'
function StudentHome(props) {
  const url = window.location.href;
  const getPage = url.split("#");
  let pageComponent;
  if(getPage[1] === "home"){
    pageComponent = <QRCode/>;
  }else if (getPage[1] === "Classes"){
    pageComponent = <StudentClasses/>;
  }else{
    pageComponent = <QRCode/>;
  }
  return (
    <div style={{paddingTop: "2rem" }}>
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
        
          {pageComponent}

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