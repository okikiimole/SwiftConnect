import react from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="head-container">
        <h1>Fast Payments,</h1>
        <h1 className="head-div">Endless Rewards.</h1>
        </div>
        <p>
          Payment utility bills with ease,or earn big<br></br>by referring users
          as an agent.
        </p>
        <div className="three-herodiv">
          <div className="btn2-container">
            <button className="apple-btn">
              <img className="btn-image1" src="/apple logo.jpg" />
              Get on iphone
            </button>
            <button className="playstore-btn">
              <img className="btn-image2" src="playstore logo.png" />
              Get on Andriod
            </button>
          </div>
          <img
            className="mockup1-image"
            src="/mobile_mockup1 (1).svg"
            alt="logo"
          />
        </div>
      </div>
    </section>
  );
}
