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
      <nav>
        <Link to="/Login" className="navButtons">
          Login
        </Link>
      </nav>
      <nav className="navBlock">
        <Link to="/Dashboard" className="navButtons">
          Student Dashboard
        </Link>
      </nav>
      <nav className="navBlock">
        <Link to="/StudentHome" className="navButtons">
          Student Profile
        </Link>
      </nav>
    </Navbar>
  );
};

export default Navigation;
