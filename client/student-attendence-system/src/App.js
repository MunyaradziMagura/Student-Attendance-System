import React from 'react';
//import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './styles/index.css';
import Login from './components/Login';
import StudentDashboard from './components/StudentDashboard';
import StudentProfile from './components/StudentProfile';
import LecturerDashboard from './components/LecturerDashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/login" style={{padding: 20}}>Login</Link>
          <Link to="/studentdashboard" style={{padding: 20}}>Student Dashboard</Link>
          <Link to="/studentprofile" style={{padding: 20}}>Student Profile</Link>
          <Link to="/lecturerdashboard" style={{padding: 20}}>Lecturer Dashboard</Link>
        </nav>
        <Routes>
          <Route path="/studentdashboard" element={<StudentDashboard/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/studentprofile" element={<StudentProfile/>}/>
          <Route path="/lecturerdashboard" element={<LecturerDashboard/>}/>
        </Routes>
      </Router>
    </div>

  );
}

export default App;
