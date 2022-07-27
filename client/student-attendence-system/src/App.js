import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './styles/index.css';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <nav style={{margin: 10}}>
          <Link to="studentdashboard" style={{padding: 5}}>
            Student Dashboard
          </Link>
              <Routes>
                <Route path="studentdashboard" element={<StudentDashboard/>} />
              </Routes>
        </nav>
      
      </Router>        
      <Login/>
    </div>
  );
}

function StudentDashboard() {
  return (
      <h2>Student Dashboard</h2>
  )
}

export default App;
