import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import studentNavStyle from "../styles/student.css";
import { IoHome, IoPersonCircleOutline, IoBook } from "react-icons/io5";
import StudentHome from "../../pages/StudentHome";

function StudentNavigation({ userName, setPage }) {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand
          href="#Home"
          style={{ fontWeight: "bold", fontSize: "2rem" }}
          onClick={() => setPage("Home")}
        >
          Welcome back {userName}!
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link
              href="#Home"
              id="navPageLink"
              onClick={() => setPage("Home")}
            >
              <IoHome id="navPageLinkIcon" /> Home
            </Nav.Link>
            <Nav.Link
              href="#Profile"
              id="navPageLink"
              onClick={() => setPage("Profile")}
            >
              <IoPersonCircleOutline id="navPageLinkIcon" /> Profile
            </Nav.Link>

            <Nav.Link
              href="#Classes"
              id="navPageLink"
              onClick={() => setPage("Classes")}
            >
              <IoBook id="navPageLinkIcon" /> Classes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default StudentNavigation;
