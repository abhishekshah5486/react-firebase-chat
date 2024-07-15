import './Login.css';

const Login = () => {
    return (
        <div className='login-page'>
            <div className="login">
                <h2>Welcome back,</h2>
                <form action="" className='login-form'>
                    <input type="email" placeholder='Enter email' required/>
                    <input type="password" placeholder='Enter password' required/>
                    <button type='submit'>Sign In</button>
                </form>
            </div>
            <div className="separator"></div>
            <div className="register">
                <h2>New to Netflix? Sign up now.</h2>
                <form action="" className='register-form'>
                    <input type="text" placeholder='Enter username' required/>
                    <input type="email" placeholder='Enter email' required/>
                    <input type="password" placeholder='Enter password' required/>
                    <button type='submit'>Register</button>
                </form>
            </div>
        </div>
    )
}
export default Login;