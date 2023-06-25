import React from "react";
import logo from "../assets/logo.png";
import twitter from "../assets/twiter.png";
import telegram from "../assets/telegram.png";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <i className="text-white fa-solid fa-bars"></i>
            </span>
            {/* <span className="navbar-toggler-icon"></span> */}
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#gain">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#why">
                  Why Wojakpot
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#roadmap">
                  Roadmap
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#prize">
                  Whitepaper
                </a>
              </li>
            </ul>
            <div style={{ gap: "18px" }} className="d-flex">
              <a href="">
                <img src={twitter} alt="" />
              </a>
              <a href="">
                <img src={telegram} alt="" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
