import React, { useState } from "react";
import "./register.scss";
import { txtDB } from "../../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import bcrypt from "bcryptjs";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showError, setShowError] = useState(false);

    const handleSignup = async (e) => {
        e.preventDefault();
        if (email === "" || password === "" || name === "") {
            setError("Please fill in all fields");
            setShowError(true);
            return;
        } else {
            setShowError(false);
            setError("");
        }

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        try {
            const docRef = await addDoc(collection(txtDB, "users"), {
                name: name,
                email: email,
                password: hashedPassword
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
            setError("Failed to register. Try again later.");
            setShowError(true);
        }
    };

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
            <button type="submit" className="RegisterRectangle">Registrarse</button>
          </form>
          {showError && (
            <div className="ErrorMessage" onClick={() => setShowError(false)}>
              {error}
            </div>
          )}
        </div>
    );
}
