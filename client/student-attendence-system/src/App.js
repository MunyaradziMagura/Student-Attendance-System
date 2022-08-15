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
<<<<<<< HEAD:src/App.js
import YourCourse from "./pages/Dashboard-YourCourse";
=======
>>>>>>> parent of f3e10d1 (Merge branch 'main' into StudentHome):client/student-attendence-system/src/App.js
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
<<<<<<< HEAD:src/App.js
          <Route path="/Dashboard/YourCourse" element={<YourCourse />} />
=======
>>>>>>> parent of f3e10d1 (Merge branch 'main' into StudentHome):client/student-attendence-system/src/App.js
          <Route path="/StudentHome" element={<StudentHome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
