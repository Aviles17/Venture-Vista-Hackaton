import React from "react";
import "./signup.scss"
import Bubble from "../../components/top_bubble/bubble";
import Register from "../../components/register/register";
import Foot from "../../components/Foot";

export default function SignUp() {
    return(
        <div className="signup">
            <Bubble />
            <Register />
            <Foot />
        </div>

    )
}