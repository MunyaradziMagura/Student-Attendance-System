import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from 'react-bootstrap/Button'
import { IoPersonSharp, IoLockClosedSharp } from 'react-icons/io5'
import { useState } from "react";
import { userLogin } from "../utils/doRequest";
import { useNavigate } from "react-router-dom";
import logo from './unisa-logo.png'

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

      if (role === "students") {
        navigate("/StudentHome", { state: { student: res.data } });
        localStorage.setItem("role", res.data.role);
        localStorage.setItem("student", JSON.stringify(res.data));
      } else if (role === "lecturers") {
        navigate("/Dashboard", { state: { lecturer: res.data } });
        localStorage.setItem("email", res.data.email);
        localStorage.setItem("name", res.data.fullName);
        localStorage.setItem("lecturer", JSON.stringify(res.data))
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
      <img src={logo} style={{width: 150, height: 150}} alt="logo"></img>

        <h1>Login</h1>
        <div>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon3"><IoPersonSharp/></InputGroup.Text>
            <Form.Control
              placeholder="Username"
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
            <InputGroup.Text id="basic-addon3" ><IoLockClosedSharp/></InputGroup.Text>
            <Form.Control
              placeholder="Password"
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
          <Button size="sm" variant="light" type="submit" onClick={(e) => Login("students")}>
            Student Login
          </Button> {' '}

          <Button size="sm" variant="light" type="submit" onClick={(e) => Login("lecturers")}>
            Lecturer Login
          </Button>
      </form>
    </div>
  );
}

export default Login;
