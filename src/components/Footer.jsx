import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="d-flex justify-content-between">
          <img src={logo} alt="" />
          <p>wojackpotinfo@gmail.com</p>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
