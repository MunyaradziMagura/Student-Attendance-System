import React from "react";
//import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles/index.css";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./pages/Login";
import StudentHome from "./pages/StudentHome";
import Dashboard from "./pages/Dashboard";
import Navigation from "./components/Navigation"
function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navigation></Navigation> */}
        <Routes>
          
          <Route path="/Login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/StudentHome" element={<StudentHome/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
