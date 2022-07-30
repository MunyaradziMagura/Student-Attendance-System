import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import studentNavStyle from '../styles/studentNav.css'
import { IoHome, IoPersonCircleOutline, IoBook } from "react-icons/io5";

function CollapsibleExample(props) {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home" style={{ fontWeight: "bold", fontSize: "2rem"}}>Welcome back {props.userName}!</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
          <Nav.Link href="#Home" id='navPageLink'><IoHome id='navPageLinkIcon'/> Home</Nav.Link>
            <Nav.Link href="#Profile"id='navPageLink'><IoPersonCircleOutline id='navPageLinkIcon'/> Profile</Nav.Link>
            <Nav.Link href="#Classes"id='navPageLink'><IoBook id='navPageLinkIcon'/> Classes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;