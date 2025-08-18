import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("Login successful:", data);

      if (response.ok) {
        navigate("/dashboard"); // Redirect afater login success
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleUseMobile = () => {
    console.log("Use mobile clicked");
  };

  return (
    <div className="parent-container">
      <img className="logo-image" src={logo} alt="Logo" />
      <div className="container">
        <div>
          <h2 style={{ textAlign: "center" }}>Login</h2>
          <p className="subtitle">Enter your email.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-cont">
            <label for="email">Email</label>
            {/* <br></br> */}
            <input
              className="my-input"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <br />
          <div className="input-cont">
            <label for="password">Password</label>
            {/* <br></br> */}
            <input
              className="my-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <br />
          <div className="button-sub">
            <button
              className="A-button"
              type="button"
              onClick={handleUseMobile}
            >
              Use mobile
            </button>
            <button className="B-button" type="submit">
              Continue
            </button>
          </div>
        </form>
      </div>

      <div>
        <p className="sub-inlinetext">
          New to Swift Connect?{" "}
          <Link className="inline-text" to="/signup">
            Create an Account
          </Link>
        </p>

        <p>
          By entering and clicking Continue, you agree to the{" "}
          <a className="inline-text2" href="#">
            Terms, E-Sign Consent & Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
