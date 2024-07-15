import './Login.css';
import userProfile from '../../Assets/Images/userProfile2.png';
import { useState } from 'react';

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