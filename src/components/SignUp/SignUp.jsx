import { useState } from 'react';
import './SignUp.css'

const SignUp = () => {
    const [update, setUpdate] = useState("Sign Up")

  return (
    <div>
        <div className="signup-container">
            <h2>{update}</h2>
            <div className="underline"></div>
            <div className="signup-inputs">
                {update === "Login" ? <div></div> : <div className="signup-input">
                    <label htmlFor="username">Name</label>
                    <input type="text" name="name" placeholder="Name" />
                </div>}
                
                <div className="signup-input">
                    <label htmlFor="Email">Email ID</label>
                    <input type="email" name="email" placeholder="Email ID" />
                </div>
                <div className="signup-input">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="Password" />
                </div>
                {update === "Sign Up" ? <div></div> : <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>}
                
                <div className="sumbit-container">
                    <div className={update === "Login"? "submit gray" : "submit"} onClick={() => {setUpdate("Sign Up")}}>Sign Up</div>
                    <div className={update === "Sign Up"? "submit gray" : "submit"} onClick={() => {setUpdate("Login")}}>Login</div>
                </div>
            </div>
        </div>
    </div>
  )
};

export default SignUp;
