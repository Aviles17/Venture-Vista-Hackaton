import React from "react";
import "./bubble.scss";
import Logo from "../../assets/icons/logo.svg"
import { NavLink } from "react-router-dom";

export default function bubble() {

    return(
        <div className="container-all">
        <div>
          <NavLink to="/" className="logo_link">
            <img src={Logo} alt="Logo" className="logo-image" />
          </NavLink>

          </div>
        <div className="container-login-signup">
          <header>
            <nav>
              <ul className="nav-list">
                <li className="nav-list1">
                  <div className="link-container-register">
                    <NavLink to="/login" className="login" style={({ isActive }) => isActive ? {textDecoration:"underline"} : {}} >Login</NavLink>
                    <NavLink to="/signup" className="register" style={({ isActive }) => isActive ? {textDecoration:"underline"} : {}}>Register</NavLink>
                  </div>
                  <div className="link-container-others">
                    <NavLink to= "/sobre-nosotros" className="AboutUs">Sobre Nosotros</NavLink>
                  </div>
                </li>
              </ul>
            </nav>
          </header>

        </div>
        </div>
    );
}