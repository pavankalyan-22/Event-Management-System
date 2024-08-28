import React, { useState } from 'react';
import './Login.css';

import user_icon from '../Assests/person.png';
import email_icon from '../Assests/email.png';
import password_icon from '../Assests/password.png';

const AdminLoginSignup = () => {
    const [action, setAction] = useState("Login");

    return (
        <div className="container">
            <div className="header">
                <div className="text">{action} as Admin</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Login" ? <div></div> : (
                    <div className="input">
                        <img src={user_icon} alt="User Icon" />
                        <input type="text" placeholder='Admin Name' />
                    </div>
                )}
                <div className="input">
                    <img src={email_icon} alt="Email Icon" />
                    <input type="email" placeholder='Admin Email ID' />
                </div>
                <div className="input">
                    <img src={password_icon} alt="Password Icon" />
                    <input type="password" placeholder='Admin Password' />
                </div>
            </div>
            {action === "Login" ? (
                <div className="forgot-password">Forgot password? <span>Click Here</span></div>
            ) : <div></div>}

            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign up") }}>Signup</div>
                <div className={action === "Sign up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
            </div>
        </div>
    );
};

export default AdminLoginSignup;