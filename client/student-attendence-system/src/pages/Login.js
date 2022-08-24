import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';
import { useState } from 'react'

function Login() {
  const [userEmail, setEmail] = useState('')
  const [userPassword, setPassword] = useState('')
  const loginUser = () => {
    axios({
      method: "POST",
      data: {
        email: userEmail,
        password: userPassword
      },
      //withCredentials: true, Need to fix this part so that auth is properly configured
      url: "http://localhost:5001/api/users/Login",
    }).then((res) => (console.log(res)))

  }


  const handleSubmit = async (e) => {
    e.preventDefault()
  }


  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon3">
              Username:
            </InputGroup.Text>
            <Form.Control id="basic-url" aria-describedby="basic-addon3" name="email" onChange={(e) => setEmail(e.target.value)} value={userEmail} required />
          </InputGroup>
        </div>
        <div>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon3">
              Password:
            </InputGroup.Text>
            <Form.Control id="basic-url" aria-describedby="basic-addon3" type="password" name="password" onChange={(e) => setPassword(e.target.value)} value={userPassword} required />
          </InputGroup>

        </div>
        <button type="submit" onClick={loginUser}>Login</button>
      </form>
    </div>
  );

}

export default Login