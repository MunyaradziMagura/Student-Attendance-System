import React from 'react';
//import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './styles/index.css';
import Login from './pages/Login';


function App() {
  return (
    <div className="App">
      <Login />
    </div>

  );
}

export default App;
