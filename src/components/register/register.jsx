import React from "react";
import "./register.scss";

import { useState } from "react";
export default function Resgister(){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [showError, setShowError] = useState(false);

    const handleSignup = (e) =>{
      e.preventDefault();
      if(email === "" && password === "" && name == ""){
        setError("Llene las casillas")
        setShowError(true);
        return;
      }
      else{
        setShowError(false);
        setError("")
      }
      {console.log(name,email,password)}
    }
    return (
        <div className="SignupFrame">
          <form className="form2" onSubmit={handleSignup} >
            <input
              type="text"
              className="NameRectangleS"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              className="EmailRectangleS"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="PasswordRectangleS"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="RecoverGoogleBox">
            <a href="https://www.google.com">
              <img
                src= {Google}
                className="RecoverGoogleImage"
              />
            </a>
            </div>
            <div className="RecoverFacebookBox">
            <a href="https://www.google.com">
              <img
                src= {Facebook}
                className="RecoverFacebookImage"
              />
            </a>
            </div>

            <button type="submit" className="RegisterRectangle">Register</button>
          </form>
          {showError && (
            <div className="ErrorMessage" onClick={() => setShowError(false)}>
              {error} </div> )}
        </div>
    )
}