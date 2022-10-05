import React from "react";
//import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./styles/index.css";
import Login from "./pages/Login";

import StudentHome from "./pages/StudentHome";
import Dashboard from "./pages/Dashboard";
function RequireAuth({ children }) {
  const authed = localStorage.getItem("login");

  return authed === "yes" ? ( // 判断 localstorage 中登录状态是否为 true
    children
  ) : (
    <Navigate to="/" replace /> // 跳转到登录
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navigation /> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route
            path="/Dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route
            path="/StudentHome"
            element={
              <RequireAuth>
                <StudentHome />
              </RequireAuth>
            }
          />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
