import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

// routing
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar variant="dark" style={{ padding: 20 }}>
      {/* add logo */}
      <Navbar.Brand>UNISA</Navbar.Brand>
      <Nav className="navBlock" style={{ paddingLeft: "1rem" }}>
        <Link to="/Login" className="navButtons">
          Login
        </Link>
      </Nav>
      <Nav className="navBlock" style={{ paddingLeft: "1rem" }}>
        <Link to="/Dashboard" className="navButtons">
          Student Dashboard
        </Link>
      </Nav>
      <Nav className="navBlock" style={{ paddingLeft: "1rem" }}>
        <Link to="/StudentHome" className="navButtons">
          Student Profile
        </Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
