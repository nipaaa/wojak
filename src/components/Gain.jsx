import React from "react";
import gain from "../assets/gain.png";

const Gain = () => {
  return (
    <div className="gain">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <h3>WojakPot :</h3>
            <h4 className="gradient_text">Your Luck, Your Gain!</h4>
            <p>
              Embrace the thrill of crypto meme holding with WojakPot. Every
              coin you hold could be your ticket to the jackpot!{" "}
            </p>
            <p>
              Our revolutionary tokenomics design ensures that just by holding,
              you stand a chance to win big every day. Be part of this
              game-changing movement in the crypto world!
            </p>
            <button className="gradient_btn">Join Us</button>
          </div>
          <div className="col-12 col-md-6">
            <img className="img-fluid" src={gain} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gain;
