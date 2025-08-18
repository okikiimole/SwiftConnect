import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function SignUp() {
  const navigate = useNavigate();

  // const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  // const [password,setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [referralCode, setReferralCode] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log("Sign up with", { email, mobileNumber, referralCode });

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, mobileNumber, referralCode }),
      });

      const data = await response.json();
      console.log("Signup successful:", data);

      if (response.ok) {
        navigate("/dashboard");  // Redirect after signup success
      } else {
        alert(data.message || "Sign up failed");
      }
    } catch (error) {
      console.error("error fetching data:", error);
    }
  };

  return (
    <div className="parent-container">
      <img className="logo-image" src={logo} alt="logo" />
      <div className="container sign-up">
        <div className="form-heading">
          <h2>Sign Up</h2>
          <p>Input your details to Register.</p>
        </div>
        <form onSubmit={handleSignUp}>
          <div className="input-cont">
            <label>Email Address</label>
            {/* <br></br> */}
            <input
              type="email"
              placeholder="Input your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <br />
          <div className="input-cont">
            <label>Mobile number</label>
            {/* <br></br> */}
            <input
              type="tel"
              placeholder="Enter phone number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
            />
          </div>
          <br />
          <div className="input-cont">
            <label>Referral Code (Optional)</label>
            {/* <br></br> */}
            <input
              type="text"
              placeholder="Enter referral code (optional)"
              value={referralCode}
              onChange={(e) => setReferralCode(e.target.value)}
            />
          </div>
          <br />
          <div>
            <button className="C-button" type="submit">
              Continue
            </button>
          </div>
        </form>
      </div>
      <div>
        <p className="sub-inlinetext">
          Already have an account?{" "}
          <Link className="inline-text" to="/">
            Login
          </Link>
        </p>
        <p>
          By entering and clicking Continue, you agree to the{" "}
          <a className="inline-text2" href="#">
            Terms, E-Sign Consent & Privacy Policy.
          </a>
        </p>
      </div>
    </div>
  );
}
