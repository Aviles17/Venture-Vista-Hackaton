import React from "react";
import "./bubble.scss";
import Logo from "../../assets/icons/logo.svg"
import { Link } from "react-router-dom";

export default function bubble() {
    return(
        <div className="container-all">
        <div>
        <img src={Logo} alt="Logo" className="logo-image" />
          </div>
        <div className="container-login-signup">
          <header>
            <nav>
              <ul className="nav-list">
                <li className="nav-list1">
                  <div className="link-container-register">
                    <Link to="/login" className="login" >Login</Link>
                    <Link to="/registro" className="register">Register</Link>
                  </div>
                  <div className="link-container-others">
                    <Link to= "/sobre-nosotros" className="AboutUs">Sobre Nosotros</Link>
                  </div>
                </li>
              </ul>
            </nav>
          </header>

        </div>
        </div>
    );
}