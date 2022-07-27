import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Login = () => {
  return (
    <div className="Login">
        <form>
            <h1>Login</h1>
            <div>
                <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">
        Username:
        </InputGroup.Text>
        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>
            </div>
            <div>
            <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">
        Password:
        </InputGroup.Text>
        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>
                
            </div>
            <button type="Login">Login</button>
        </form>
    </div>
  )
}

export default Login