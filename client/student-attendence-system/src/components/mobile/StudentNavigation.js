import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import {
  IoHome,
  IoPersonCircleOutline,
  IoBook,
  IoLogOutSharp,
  IoAlbums
} from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function StudentNavigation({ fullName, setPage }, props) {
  // logout function
  const navigate = useNavigate();
  const doLogout = () => {
    localStorage.clear();
    navigate("/Login");
  };
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        Welcome back {fullName}!
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
            <Nav.Link
              href="#Notes"
              id="navPageLink"
              onClick={() => setPage("Report")}
            >
              <IoAlbums id="IoAlbums"/> Class History & Notes
            </Nav.Link>
            <Nav.Link onClick={doLogout}>
              <IoLogOutSharp />
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
