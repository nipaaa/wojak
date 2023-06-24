import React, { useState } from "react";
import prize from "../assets/prize.png";

const Prize = () => {
  const [value, setValue] = useState(50);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="prize">
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
            <button className="gradient_btn">Win Now</button>
          </div>
          <div className="col-12 col-md-6">
            <img src={prize} alt="" />
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
