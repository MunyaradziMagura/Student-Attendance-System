import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

// routing
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container>
        <Navbar.Brand>UNISA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/Login" href="/Login">
              Login
            </Nav.Link>
            <Nav.Link to="/Dashboard" href="/LecturerDashboard">
              Lecturer Dashboard
            </Nav.Link>
            <Nav.Link to="/StudentHome" href="/StudentHome">
              Student Home
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
