import { useState } from "react";
import "./signup.css";
import { Link, useNavigate } from 'react-router-dom';
// import signupBackground from '../vite-project/public/Images/signupBackground.png';

export default function Signup() {

    const navigate = useNavigate();

    const backgroundImage = {
        backgroundImage: `url('/Images/signupBackground.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
    };

    const [userData, setUserData] = useState({
        Name: '',
        Email: '',
        Password: ''
    });
    const [error, setError] = useState('');

    const validateForm = () => {
        const { Name, Email, Password } = userData;
        if (!Name || !Email || !Password) {
            setError("All fields are required.");
            return false;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(Email)) {
            setError("Please enter a valid email address.");
            return false;
        }
        setError('');
        return true;
    };

    const handleSubmit = (e) =>     {
        e.preventDefault();
        if (validateForm()) {
            // Proceed with form submission
            console.log("Form submitted successfully", userData);
            navigate('/e-commerce/log-in');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    return (
        <div style={backgroundImage} className="signupContainer">
            <form onSubmit={handleSubmit} className="signupForm">
                <h1 className="heading">Sign Up</h1>
                <input
                    type="text"
                    name="Name"
                    placeholder="Name"
                    value={userData.Name}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="Email"
                    placeholder="Email"
                    value={userData.Email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="Password"
                    placeholder="Password"
                    value={userData.Password}
                    onChange={handleChange}
                />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit" className="submitButton">Sign Up</button>
                <p className="haveAccount">Already have an account? <Link to="/e-commerce/log-in" className="signupLink">Login</Link></p>
            </form>
        </div>
    );
}