import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-details">
        <div>
          <img className="footer-swift-logo" src="/download-swiftc-logo.png" alt="logo" />
          <h2 className="footer-s">Swift Connect</h2>
          <p className="footer-p">
            Pay utility bills with ease, or earn big by referring users as an
            agent.
          </p>
        </div>
        <div className="footer-links">
          <h2 className="footer-h2">Quick Links</h2>
          <div>
          <a href="https://swiftconnect.com.ng/">Home</a>
          <a href="https://swiftconnect.com.ng/Personal">Personal</a>
          <a href="https://swiftconnect.com.ng/Agent">Agent</a>
          <a href="https://swiftconnect.com.ng/AboutUs">About Us</a>
          <a href="https://swiftconnect.com.ng/delete">
            Account Deletion Instructions
          </a>
          </div>
        </div>
        <div>
          <h2 className="footer-h2">Contact Info</h2>
          <div>
          <p className="footer-p">Email: info@architectura.com</p>
          <p className="footer-p">Phone: +1 123-456-7890</p>
          <p className="footer-p">Address: 123 Architecture Lane, Design City, Country</p>
          </div>
          </div>
        </div>
        <div>
          <hr className="footer-line" />
          <div className="footer-anchor">
            <p className="footer-trademark">© 2025 SwiftConnect. All rights reserved.</p>
            <div className="footer-logo">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <img
                  className="f-logo"
                  src="/images-fb-removebg-preview.png"
                  alt="Facebook"
                />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <img
                  className="i-logo"
                  src="/download-instagram.png"
                  alt="Instagram"
                />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <img
                  className="y-logo"
                  src="/YouTube_social_dark_square__2017_.svg-removebg-preview.png"
                  alt="YouTube"
                />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <img
                  className="t-logo"
                  src="/twitter-logo.webp"
                  alt="Twitter"
                />
              </a>
            </div>
          </div>
        </div>
      
    </footer>
  );
}
