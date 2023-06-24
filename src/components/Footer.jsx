import React from "react";
import logo from "../assets/logo.png";
import twitter from "../assets/twitterf.svg";
import tiktok from "../assets/tiktok.png";
import instagram from "../assets/instagram.png";
import telegram from "../assets/telegramf.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="d-flex gap-5">
            <img className="me-5" src={logo} alt="" />
            <p>wojackpotinfo@gmail.com</p>
          </div>
          <div className="d-flex gap-4 align-items-center">
            <div className="social">
              <img src={twitter} alt="" />
            </div>
            <div className="social">
              <img src={tiktok} alt="" />
            </div>
            <div className="social">
              <img src={instagram} alt="" />
            </div>
            <div className="social">
              <img src={telegram} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
