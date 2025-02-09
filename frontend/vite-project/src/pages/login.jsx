import "./login.css"
import { Link, useNavigate } from 'react-router-dom'
// import signupBackground from '../Images/signupBackground.png';
import { useState } from "react";

export default function Login()
{
    const navigate = useNavigate();

    const backgroundImage = {
        backgroundImage: `url('/Images/signupBackground.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
    }

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })
    const [error, setError] = useState("");

    const validateForm = () => {
        const { email, password } = loginData;
        if (!email || !password) {
            setError("All fields are required.");
            return false;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setError("Please enter a valid email address.");
            return false;
        }
        setError('');
        return true;
    }

    

    const handleChange = (e) => {
        const {name, value} = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        })
    }

    const loginSubmission = (e) => {
        e.preventDefault();
        if(validateForm())
        {
            console.log("Form submitted successfully", loginData);
            navigate('/e-commerce/home');
        }
    }

    return <>
        <div style={backgroundImage}>
            <div className="loginContainer">
                <form className="loginForm" onSubmit={loginSubmission}>
                    <h1 className="loginHeading">Log in</h1> 
                    <input 
                        type="text" 
                        name="email"
                        placeholder="Email" 
                        onChange={handleChange}
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        name="password"
                        onChange={handleChange}
                    />

                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    
                    <button type="submit" className="loginButton">Log in</button>
                    

                    <a href="#" className="forgotPassword">Forgot password?</a>

                    <p className="haveNotAccount">Don't have any account? 
                        <Link to='/e-commerce/sign-up' className="signupLink">Sign up</Link>
                    </p>

                </form>
            </div>
        </div>
    </>
}   