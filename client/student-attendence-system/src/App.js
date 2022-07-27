import React from "react";
//import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles/index.css";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import StudentProfile from "./pages/StudentProfile";
import LecturerDashboard from "./pages/LecturerDashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar variant="dark" style={{ padding: 20 }}>
          {/* add logo */}
          <Navbar.Brand>UNISA</Navbar.Brand>
          <nav>
            <Link to="/login"  className="navButtons">
              Login
            </Link>
          </nav>
          <nav className="navBlock">
            <Link to="/studentdashboard" className="navButtons">
              Student Dashboard
            </Link>
          </nav>
          <nav className="navBlock">
            <Link to="/studentprofile"  className="navButtons">
              Student Profile
            </Link>
          </nav>
          <nav className="navBlock">
            <Link to="/lecturerdashboard"  className="navButtons">
              Lecturer Dashboard
            </Link>
          </nav>
        </Navbar>
        <Routes>
          <Route path="/studentdashboard" element={<StudentDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/studentprofile" element={<StudentProfile />} />
          <Route path="/lecturerdashboard" element={<LecturerDashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
