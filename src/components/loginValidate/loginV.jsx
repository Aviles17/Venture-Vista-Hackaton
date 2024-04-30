import React, { useState } from "react";
import "./loginV.scss";
import { txtDB } from "../../../firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import bcrypt from "bcryptjs";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showError, setShowError] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
            setError("Please fill in all fields");
            setShowError(true);
            return;
        } else {
            setError("");
            setShowError(false);
        }

        const usersRef = collection(txtDB, "users");
        const q = query(usersRef, where("email", "==", email));
        try {
            const querySnapshot = await getDocs(q);
            if (querySnapshot.empty) {
                setError("No user found with that email");
                setShowError(true);
                return;
            }
            querySnapshot.forEach((doc) => {
                const user = doc.data();
                if (bcrypt.compareSync(password, user.password)) {
                    console.log("Login successful!");
                    navigate('/');
                } else {
                    setError("Invalid password");
                    setShowError(true);
                }
            });
        } catch (error) {
            console.error("Error fetching user: ", error);
            setError("Failed to login. Try again later.");
            setShowError(true);
        }
    };

    return (
        <div className="LoginFrame">
            <form className="form1" onSubmit={handleLogin}>
                <input
                    type="text"
                    className="EmailRectangle"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    className="PasswordRectangle"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p className="RecoverPasswordText">
                    <a href="https://www.example.com/recover" className="RecoverLink">
                        Recover Password
                    </a>
                </p>
                <button type="submit" className="LoginRectangle">Login</button>
            </form>
            {showError && (
                <div className="ErrorMessage" onClick={() => setShowError(false)}>
                    {error}
                </div>
            )}
        </div>
    );
}
