import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div>
        <img className="navbar-logo" src="/SWIFT_LOGO_White.svg" alt="logo"/>
        </div>

        {/* Nav Links */}
        <ul className="navbar-links">
          <div className="threelinks-navbar">
          <li><Link to="/">Personal</Link></li>
          <li><Link to="/agent">Agent</Link></li>
          <li><Link to="/about">About Us</Link></li>
          </div>
          <li><Link to="/login">Login</Link></li>
          <div className="button-signup">
          <li><Link to="/signup " className="signup-btn">Sign Up</Link></li>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
