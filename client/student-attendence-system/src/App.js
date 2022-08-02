import React from 'react';
//import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link, parsePath } from 'react-router-dom'
import './styles/index.css';

import Login from './pages/Login';
import StudentHome from './pages/StudentHome'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <div className="App">
        <nav style={{margin: 10}}>
          <Link to="studentdashboard" style={{padding: 5}}>
            Student Dashboard
          </Link>
              <Routes>
                <Route path="studentdashboard" element={<Dashboard/>} />
              </Routes>
        </nav>

      
    </div>

  );
}

export default App;