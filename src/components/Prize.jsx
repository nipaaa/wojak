import React, { useState } from "react";
import prize from "../assets/prize.png";
import trophy from "../assets/trofy.png";

const Prize = () => {
  const [value, setValue] = useState(50);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div id="prize" className="prize">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <h3>Wojakpot prize calculator</h3>
            <p>
              Where memes meet money, unleashing a new era of internet-fueled
              fortunes. <br /> <br />
              Join the Wojak revolution and ride the rollercoaster of laughter
              and gains!
            </p>
            <button className="gradient_btn">
              Win Now <img src={trophy} alt="" />
            </button>
          </div>
          <div className="col-12 col-md-6">
            <div className="text-center">
              <img className="img-fluid" src={prize} alt="" />
            </div>
            <div className="px-4 mb-3 d-flex align-items-center justify-content-between text-white">
              <span>300K$</span>
              <span>Raised - 75k$</span>
              <span>50M</span>
            </div>
            <div className="d-flex align-items-center">
              <input
                className="range"
                type="range"
                value={value}
                min="0"
                max="100"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prize;
