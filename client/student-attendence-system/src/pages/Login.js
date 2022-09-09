import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";
import { useState } from "react";
import { loginLecturer, userLogin } from "../utils/doRequest";
import { useNavigate } from "react-router-dom";
function Login() {
  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const loginUser = (role) => {
    userLogin({
      email: userEmail,
      password: userPassword,
      role: role,
    }).then((res) => {
      localStorage.setItem("login", "yes");
      // localStorage.setItem("email", res.data.email);

      if (role == "students") {
        navigate("/StudentHome", { state: { student: res.data } });
        localStorage.setItem("role", res.data.role);
        localStorage.setItem("student", res.data);
      } else if (role == "lecturers") {
        navigate("/Dashboard");
        localStorage.setItem("email", res.data.email);
        localStorage.setItem("name", res.data.fullName);
        localStorage.setItem("lecturer", res.data);
      } else {
        navigate("/Login");
      }
    });
  };

  const Login = (role) => {
    // set role
    setRole(role);
    loginUser(role);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon3">Username:</InputGroup.Text>
            <Form.Control
              id="basic-url"
              aria-describedby="basic-addon3"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={userEmail}
              required
            />
          </InputGroup>
        </div>
        <div>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon3">Password:</InputGroup.Text>
            <Form.Control
              id="basic-url"
              aria-describedby="basic-addon3"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={userPassword}
              required
            />
          </InputGroup>
        </div>
        <button type="submit" onClick={(e) => Login("students")}>
          Student Login
        </button>

        <button type="submit" onClick={(e) => Login("lecturers")}>
          Lecturers Login
        </button>
      </form>
    </div>
  );
}

export default Login;
