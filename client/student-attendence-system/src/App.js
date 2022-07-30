import React from 'react';
//import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link, parsePath } from 'react-router-dom'
import './styles/index.css';
import Login from './pages/Login';

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
      <Login />
    </div>

  );
}

export default App;