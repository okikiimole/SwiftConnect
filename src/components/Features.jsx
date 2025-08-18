import React from "react";
import { Link } from "react-router-dom";
import "./Features.css";

export default function Features() {
    return(
        <section className="features">
            <div className="parent-container">
        <div className="top-head">
            <h2 className="heading">Effortless Utility Bill<br></br>Management</h2>
            <p>Manage your electricity,water,internet and mobile<br></br>recharge payments all in one place</p>
        </div>
        <div className="section-a">
            <img src="/airtime-logo.svg" alt="logo"/>
            <h2>Instant Airtime Anytime</h2>
            <p>Top your mobile phone with airtime in seconds-<br></br>fast,secureand accessible wherever you are.</p>
            <button>
                <span>Pay Now &rarr; </span>
            </button>
        </div>
        <img src="/mobile_mockup2_airtime img.svg" alt="image"/>
        {/* section b */}
        <div>
            <div>
            <img src="/internet-logo.svg" alt="logo"/>
            <h2>Stay Connected,Always</h2>
            <p>Purchase affordable data plans for your mobile and<br></br>broadband needs,ensuring seamless browsing and<br></br>streaming anytime,anywhere.</p>
            <button>
                <span>Recharge Now &rarr; </span>
            </button>
        </div>
        <img src="/mobile_mockup1 (1).svg" alt="image"/>
        </div>
        {/* section c */}
        <div>
            <div>
            <img src="/cable-tv-logo.svg" alt="logo"/>
            <h2>Entertainment Without Interrupttions</h2>
            <p>Renew your TV cable subscriptions in just a few clicks and never<br></br> miss your favourite shows again. </p>
            <button>
                <span>Pay Now &rarr; </span>
            </button>
        </div>
        <img src="/mobile_mockup1 (1).svg" alt="image"/>
        </div>
        {/* section d */}
        <div>
            <div>
            <img src="/electricity (1)-logo.svg" alt="logo"/>
            <h2>Entertainment Without Interruptions</h2>
            <p>Renew your TV cable subscriptions in just a few clicks and never<br></br> miss your favourite shows again. </p>
            <button>
                <span>Pay Now &rarr; </span>
            </button>
        </div>
        <img src="/electricity_mockup1 (1)-image.svg" alt="image"/>
        <img src="/ibedc (2)-image.svg" alt="image"/>
        </div>
        </div>
        </section>
        
        
    )

}