import React from "react";
import { Link } from "react-router-dom";
import "./Wcu.css";

export default function Wcu() {
    return(
        <div>
            <div className="sub-headwcu">
            <h2>Why Choose Us</h2>
            <p>Why Thousands Trust Us</p>
            </div>
            <div className="sub-parent-container">
            <div className="container1">
                <img src="/secure (1)-logo.svg" alt="logo"/>
                <h2>Secure</h2>
                <p>Advanced technology ensures every<br></br>transaction is protected.</p>
            </div>
            <div className="container1">
                <img src="/speedometer (1)-logo.svg" alt="logo"/>
                <h2>Fast</h2>
                <p>Experience seamless payments and<br></br> earnings without delays.</p>
            </div>
            <div className="container1">
                <img src="/secure (1)-logo.svg" alt="logo"/>
                <h2>Reliable</h2>
                <p>Count on us for consistent and<br></br> dependable service.</p>
            </div>
            </div>
            
            <div className="my-box">
            <h2 className="box-text">Join thousands of people who pay bills with </h2>
            <div className="button-img2">
            <img src="/google_play (1).svg" alt="logo"/>
            <img src="/apple (1).svg" alt="logo"/>
            </div>
            </div>
        </div>
    )
}