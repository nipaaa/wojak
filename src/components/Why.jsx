import React from "react";
import why from "../assets/why.png";

const Why = () => {
  return (
    <div className="why">
      <div className="container">
        <h3>Why WojakPot ?</h3>
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <img className="img-fluid" src={why} alt="" />
          </div>
          <div className="col-12 col-md-6">
            <div>
              <h6>Scared that the market will dump on you?</h6>
              <p>With Wojakpot even in bear market there is always a winner</p>
            </div>
            <div>
              <h6>Early Bird Gets the Worm!</h6>
              <p>
                The sooner you buy WojakPot tokens, the higher your chances of
                winning the daily raffle. So why wait?
              </p>
            </div>
            <div>
              <h6>Never a Bad Investment!</h6>
              <p>
                Feeling unlucky? With our smart tokenomics, you can sell your
                tickets for huge returns. Don&apos;t be shy; the more tickets,
                the merrier
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
