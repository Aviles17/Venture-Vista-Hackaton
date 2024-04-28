import React from "react";
import "./settings.scss"
import ChosseImg from "../../assets/images/uploadPhoto.png"
import "../../assets/images/settingsBg.png"

import { useState } from "react";

export default function Settings( {name: prop_name, email: prop_email, password: prop_password, selectedFile: prop_selectedFile}){
    const [name, setName] = useState(prop_name || "NombrePorDefecto");
    const [email, setEmail] = useState(prop_email || "EmailPorDefecto");
    const [password, setPassword] = useState(prop_password || "PasswordPorDefecto");
    const [selectedFile, setSelectedFile] = useState(prop_selectedFile || null);
    const [error, setError] = useState("");

    const handleGuardarDatos = (e) => {
      e.preventDefault();
      if (!name || !email || !password) {
        setError("Por favor complete todos los campos");
        return;
      }
      console.log(name, email, password);
    };

    const handleFileChange = (e) => {
      setSelectedFile(e.target.files[0]);
    };

    return (
      <div>
        <div className="Settings-container">
          <div className="Settings-Frame">
            <div className="chose_img_container">
            <div className="chose_img_wrapper"
            onClick={() => document.getElementById("fileInput").click()}
            >
            {selectedFile ? (
            <img
            src={URL.createObjectURL(selectedFile)}
            className="chose_img"
            alt="Selected Image"
            />
            ) : (
            <img
            src={ChosseImg}
            className="chose_img"
            alt="Choose Image"
            />
            )}
            </div>
            </div>
            <form className="form" onSubmit={handleGuardarDatos}>
            <input
                id="fileInput"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <input
                type="text"
                className="NameRectangleC"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                className="EmailRectangleC"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                className="PasswordRectangleC"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="UploadRectangle" type="submit">
                Upload
              </button>
              <button className="ChangeAcountRectangle">Cambiar de cuenta</button>
            </form>
          </div>
        </div>
      </div>
    )
}