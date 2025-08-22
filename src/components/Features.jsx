import React from "react";
import { Link } from "react-router-dom";
import "./Features.css";

export default function Features() {
  return (
    <section className="features">
      <div className="parent-container">
        <div className="top-head">
          <h2 className="heading">
            Effortless Utility Bill<br></br>Management
          </h2>
          <p>
            Manage your electricity,water,internet and mobile<br></br>recharge
            payments all in one place
          </p>
        </div>
        <div className="section-ab">
          <div className="section-a">
            <div>
              <img
                className="airtime-logo"
                src="/airtime-logo.svg"
                alt="logo"
              />
              <h2>Instant Airtime Anytime</h2>
              <p>
                Top your mobile phone with airtime in seconds-<br></br>
                fast,secureand accessible wherever you are.
              </p>
              <button>
                <span className="arrow-pay">
                  Pay Now <strong>&rarr;</strong>{" "}
                </span>
              </button>
            </div>
            <img
              className="mockup2-image"
              src="/mobile_mockup2_airtime img.svg"
              alt="image"
            />
          </div>
          {/* section b */}
          <div className="section-b">
            <div>
              <img
                className="internet-logo"
                src="/internet-logo.svg"
                alt="logo"
              />
              <h2>Stay Connected,Always</h2>
              <p>
                Purchase affordable data plans for your mobile and<br></br>
                broadband needs,ensuring seamless browsing and<br></br>streaming
                anytime,anywhere.
              </p>
              <button>
                <span className="arrow-recharge">
                  Recharge Now <strong>&rarr;</strong>{" "}
                </span>
              </button>
            </div>
            <img
              className="mockup11-image"
              src="/mobile_mockup1 (1).svg"
              alt="image"
            />
          </div>
        </div>
        {/* section c */}
        <div className="section-c">
          <div>
            <img className="cable-logo" src="/cable-tv-logo.svg" alt="logo" />
            <h2>Entertainment Without Interruptions</h2>
            <p>
              Renew your TV cable subscriptions in just a few clicks and never
              <br></br> miss your favourite shows again.{" "}
            </p>
            <button>
              <span className="arrow-payred">
                Pay Now <strong>&rarr;</strong>{" "}
              </span>
            </button>
          </div>
          <img
            className="mockup111-image"
            src="/mobile_mockup1 (1).svg"
            alt="image"
          />
        </div>
        {/* section d */}
        <div className="section-d-parent">
          <div className="section-d">
            <img
              className="elect-logo"
              src="/electricity (1)-logo.svg"
              alt="logo"
            />
            <h2>Entertainment Without Interruptions</h2>
            <p>
              Renew your TV cable subscriptions in just a few clicks and never
              <br></br> miss your favourite shows again.{" "}
            </p>
            <button>
              <span className="arrow-payred">
                Pay Now <strong>&rarr;</strong>{" "}
              </span>
            </button>
          </div>
          <div className="double-image">
            <img src="/electricity_mockup1 (1)-image.svg" alt="image" />
            <img
              className="ibedc-image"
              src="/ibedc (2)-image.svg"
              alt="image"
            />
          </div>
        </div>
        {/* section e */}
        <div className="section-e">
          <div className="head-parag">
            <h2 className="head-head">Earn More as an Agent </h2>
            <p className="parag-inline">
              Unlock financial freedom with our rewarding referral program.
            </p>
          </div>
          <div className="main-section">
            <div className="sub-section-e">
              <img
                className="track-logo"
                src="/track-referral-logo.svg"
                alt="logo"
              />
              <h2>Track Referrals and Earnings</h2>
              <p>
                Easily monitor your referrals and commissions with a simple,
                <br></br>user-friendly dashboard.
              </p>
              <button>
                <span className="access-dash">
                  Access Your Dashboard Now <strong>&rarr;</strong>
                </span>
              </button>
            </div>
            <div>
              <img
                className="referals-image"
                src="/referals_mockup_image.svg"
                alt="image"
              />
            </div>
          </div>
        </div>
        {/* section f */}
        <div className="section-f">
          <div className="sub-section-f">
            <img src="/money_sack_logo.svg" alt="logo" />
            <h2>Earn More with Every Referral</h2>
            <p>
              Enjoy high commissions and unlock unlimited earning potential
              <br></br>as you grow your network.
            </p>
            <button>
              <span className="arrow-start">
                Start Earning Today <strong>&rarr;</strong>{" "}
              </span>
            </button>
          </div>
          <img
            className="earn-mockup-img"
            src="/earn_more_mockup_image.svg"
            alt="image"
          />
        </div>
        {/* section g */}
        <div className="section-g-parent">
          <h1 className="heading-secg">
            What Our<br></br> Customers Say
          </h1>
          <div className="box">
            <h2> &#x275D; </h2>
            <p className="text">
              Their design for our corporate<br></br> headquarters was a
              game-changer.<br></br> It perfectly captures our brand's<br></br>{" "}
              essence.
            </p>
            <div className="abb-title">
              <p className="abb">JA</p>
              <div className="spn-title">
                <p>
                  <span className="spn">John T, Ajala.</span>
                </p>
                <p className="title">Managing Director, Swift</p>
              </div>
            </div>
          </div>
          <div className="box">
            <h2> &#x275D; </h2>
            <p className="text">
              Their design for our corporate<br></br> headquarters was a
              game-changer.<br></br> It perfectly captures our brand's<br></br>{" "}
              essence.
            </p>
            <div className="abb-title">
              <p className="abb">JA</p>
              <div className="spn-title">
                <p>
                  <span className="spn">John T, Ajala.</span>
                </p>
                <p className="title">Managing Director, Swift</p>
              </div>
            </div>
          </div>
          <div className="box">
            <h2> &#x275D; </h2>
            <p className="text">
              Their design for our corporate<br></br> headquarters was a
              game-changer.<br></br> It perfectly captures our brand's<br></br>{" "}
              essence.
            </p>
            <div className="abb-title">
              <p className="abb">JA</p>
              <div className="spn-title">
                <p>
                  <span className="spn">John T, Ajala.</span>
                </p>
                <p className="title">Managing Director, Swift</p>
              </div>
            </div>
          </div>
          <div className="box">
            <h2> &#x275D; </h2>
            <p className="text">
              Architectura transformed our vision<br></br> into a reality. The
              team's<br></br> professionalism and creativity were<br></br>{" "}
              exceptional
            </p>
            <div className="abb-title">
              <p className="abb">SW</p>
              <div className="spn-title">
                <p>
                  <span className="spn">Sarah W </span>
                </p>
                <p className="title">Managing Director, Swift</p>
              </div>
            </div>
          </div>
          <div className="box">
            <h2> &#x275D; </h2>
            <p className="text">
              Architectura transformed our vision<br></br> into a reality. The
              team's<br></br> professionalism and creativity were<br></br>{" "}
              exceptional
            </p>
            <div className="abb-title">
              <p className="abb">SW</p>
              <div className="spn-title">
                <p>
                  <span className="spn">Sarah W </span>
                </p>
                <p className="title">Managing Director, Swift</p>
              </div>
            </div>
          </div>
          <div className="box">
            <h2> &#x275D; </h2>
            <p className="text">
              Architectura transformed our vision<br></br> into a reality. The
              team's<br></br> professionalism and creativity were<br></br>{" "}
              exceptional
            </p>
            <div className="abb-title">
              <p className="abb">SW</p>
              <div className="spn-title">
                <p>
                  <span className="spn">Sarah W </span>
                </p>
                <p className="title">Managing Director, Swift</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
