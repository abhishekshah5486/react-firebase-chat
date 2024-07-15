import './Login.css';
import userProfile from '../../Assets/Images/userProfile2.png';
import { useState } from 'react';
import appleLogo from '../../Assets/Icons/apple-logo.svg';
import githubLogo from '../../Assets/Icons/github-logo.svg';
import googleLogo from '../../Assets/Icons/google-logo.svg';
import appleLogo2 from '../../Assets/Icons/appleLogo2.svg';

const Login = () => {
    const [avatar, setAvatar] = useState({
        file: null,
        url: ""
    })

    const handleAvatar = (e) => {
        if (e.target.files[0]){
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })
        }

    }
    const handleSignUp = () => {

    }
    const handleSignIn = () => {

    }
    return (
        <div className='login-page'>
            <div className="login">
                <h2>Welcome back,</h2>
                <form action="" className='login-form' onSubmit={handleSignIn}>
                    <input type="email" placeholder='Email' required/>
                    <input type="password" placeholder='Password' required/>
                    <button type='submit'>Sign In</button>
                </form>
                <div class="log-in-accounts">
                    <ul>
                        <li class="google-login">
                            <button class="google-login-btn">
                                <div class="google-login-div xR230zZLI">
                                    <img src={googleLogo} alt="" className='google-icon'/>
                                    <div class="xR230zZTp">
                                        <h3>Continue with Google</h3>
                                    </div>   
                                </div>
                            </button>
                        </li>
                        <li class="github-login">
                            <button class="github-login-btn">
                                <div class="github-login-div xR230zZLI">
                                    <img src={githubLogo} alt="" className='github-icon'/>
                                    <div class="xR230zZTp">
                                        <h3>Continue with Github</h3>
                                    </div>    
                                </div>
                            </button>
                        </li>
                        <li class="apple-login">
                            <button class="apple-login-btn">
                                <div class="apple-login-div xR230zZLI">
                                    <img src={appleLogo2} alt="" className='apple-icon'/>
                                    <div class="xR230zZTp">
                                        <h3>Continue with Apple</h3>
                                    </div>  
                                </div>
                            </button>
                        </li>
                    </ul>
            </div>
            </div>
            <div className="separator"></div>
            <div className="register">
                <h2>New User? Sign up now.</h2>
                <form action="" className='register-form' onSubmit={handleSignUp}>
                    <label htmlFor="file" className='upload-profile'>
                        <img src={avatar.url || userProfile} alt="" />
                        Upload profile
                    </label>
                    <input type="file" id='file' style={{display:"none"}} onChange={handleAvatar}/>
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