import React, { useState } from "react";

const Prize = () => {
    const [value,setValue]=useState(0)
    const handleChange = (e)=>{
setValue(e.target.value)
    }
  return (
    <div className="prize">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6"></div>
          <div className="col-12 col-md-6">
            <div>
              <input
                className="range"
                type="range"
                value={value}
                min="0"
                max="100"
                onChange={(e)=>handleChange(e)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prize;
