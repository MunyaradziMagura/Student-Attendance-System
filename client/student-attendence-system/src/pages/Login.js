import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {useState} from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    const configuration = {
      method: "post",
      url: "http://localhost:5000/users/login",
      data: {
        email,
        password,
      },
    }

    axios(configuration)
    .then((result)=> {console.log(result);})
    .catch((error)=>{console.log(error);})
  };

  

  return (

    <div className="Login">
        <form>
            <h1>Login</h1>
            <div>
                <InputGroup className="mb-3" name="email">
        <InputGroup.Text id="basic-addon3">
        Username:
        </InputGroup.Text>
        <Form.Control 
        id="basic-url"
        aria-describedby="basic-addon3"
        name='email'
        type='email'
        onChange={(e)=>setEmail(e.target.value)}
        />
      </InputGroup>
            </div>
            <div>
            <InputGroup className="mb-3" name="password" >
        <InputGroup.Text id="basic-addon3">
        Password:
        </InputGroup.Text>
        <Form.Control 
        id="basic-url" 
        aria-describedby="basic-addon3" 
        name='email'
        type='password'
        onChange={(e)=>setPassword(e.target.value)}/>
      </InputGroup>
                
            </div>
            <button type="submit" onClick={(e)=> handleSubmit(e)}>Login</button>
        </form>
    </div>
  )
  
}

export default Login