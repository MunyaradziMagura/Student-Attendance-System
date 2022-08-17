import React from "react";
//import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  parsePath,
} from "react-router-dom";
import "./styles/index.css";
import Login from "./pages/Login";
import StudentHome from "./pages/StudentHome";
import Dashboard from "./pages/Dashboard";
import Navigation from "./components/Navigation";

import YourCourse from "./pages/DashboardYourCourse";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/LecturerDashboard" element={<Dashboard />} />
          <Route path="/LecturerDashboard/YourCourse" element={<YourCourse />} />
          <Route path="/StudentHome" element={<StudentHome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
