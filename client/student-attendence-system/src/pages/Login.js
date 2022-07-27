function Login() {
  return (
    <div className="Login">
        <form>
            <h1>Login</h1>
            <div>
                <label>Username:</label>
                <input type="text" name="username" id="username"/>
            </div>
            <div>
                <label>Password:</label>
                <input type="text" name="username" id="password"/>
            </div>
            <button type="Login">Login</button>
        </form>
    </div>
  )
}

export default Login