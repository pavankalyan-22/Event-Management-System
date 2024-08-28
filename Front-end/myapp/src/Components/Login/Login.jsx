import React, { useState }  from 'react';
import './Login.css';

import user_icon from '../Assests/person.png'
import email_icon from '../Assests/email.png'
import password_icon from '../Assests/password.png'

const Login =()=>{

    const [action,setAction] = useState("Login");
    const [role,setRole] = useState("User");

    const handleRoleChange = (e) => {
        setRole(e.target.value);
    }
    return (
        <div className = "container">
            <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt="" />
                    <select value={role} onChange={handleRoleChange}>
                        <option value="User">User</option>
                        <option value="Admin">Admin</option>
                    </select>
                </div>
            </div>
            <div className="inputs">
                {action==="Login"?<div></div>:<div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder='Name'/>
                </div>}
                
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder='Email ID'/>
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='Password'/>
                </div>
            </div>
            {action==="Login"?<div></div>:<div className="forgot-password">Forgot password <span>click Here?</span></div>}
            
            <div className="submit-container">
                <div className={action === "Login"?"submit gray":"submit"}onClick={()=>{setAction("Sign up")}}>Signup</div>
                <div className={action === "Sign up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
            </div>
        </div>
    )
}
export default Login