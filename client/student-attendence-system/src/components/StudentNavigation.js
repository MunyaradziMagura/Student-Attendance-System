import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { IoHome, IoPersonCircleOutline, IoBook } from "react-icons/io5";
function CollapsibleExample(props) {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" width>
      <Container>
        <Navbar.Brand href="#home">Welcome back {props.userName}!</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
          <Nav.Link href="#Login"><IoHome /> Home</Nav.Link>
            <Nav.Link href="#pricing"><IoPersonCircleOutline/> Profile</Nav.Link>
            <Nav.Link href="#Login"><IoBook /> Classes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;