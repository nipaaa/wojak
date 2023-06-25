import React from "react";
import graytik from "../assets/gray-tik.png";
import greentik from "../assets/green-tik.png";

const RoadMap = () => {
  return (
    <div id="roadmap" className="roadmap">
      <div className="container">
        <h3>RoadMap</h3>
        <p>
          Memes to Millions: Unleashing the Wojak Crypto Roadmap - Join the
          journey and ride the wave of meme-powered innovation, from mining
          laughs to conquering the metaverse
        </p>
        <div className="row map_container">
          <div className="col-12 col-md-6 ">
            <div style={{ marginTop: "133px" }} className="map">
              <div className="text-center">
                <img style={{ marginBottom: "24px" }} src={graytik} alt="" />
                <div className="d-flex justify-content-center">
                  <button>Phase 2</button>
                </div>
              </div>
              <div className="box">
                <h6>Launch</h6>
                <ul>
                  <li>Pinksale Fairlaunch</li>
                  <li>Pancakeswap, CMC & Coingecko Lisiting</li>
                  <li>3000+ Holders</li>
                  <li>First Wojakpot Winner</li>
                  <li>Dextools Ads & Trending</li>
                </ul>
              </div>
            </div>
            <div className="map">
              <div className="text-center">
                <img style={{ marginBottom: "24px" }} src={graytik} alt="" />
                <div className="d-flex justify-content-center">
                  <button>Phase 4</button>
                </div>
              </div>
              <div className="box">
                <h6>Launch</h6>
                <ul>
                  <li>Staking platform launch</li>
                  <li>Tier 1 CEXs Listing Lisiting</li>
                  <li>
                    Launch &apos;Wojak Wars: Battle for Luck&apos;, our
                    Play-to-Earn NFT Game
                  </li>
                  <li>Wojakpot Meme Takeover</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 ">
            <div className="map">
              <div className="text-center">
                <img style={{ marginBottom: "24px" }} src={greentik} alt="" />
                <div className="d-flex justify-content-center">
                  <button>Phase 1</button>
                </div>
              </div>
              <div id="phaseOne" className="box ms-auto">
                <h6>Pre - Launch</h6>
                <ul>
                  <li>Teambuilding </li>
                  <li>Proof of Concept</li>
                  <li>Finalize</li>
                  <li>Whitepaper and Website design</li>
                  <li>Building social</li>
                  <li>media Community</li>
                </ul>
              </div>
            </div>
            <div className="map">
              <div className="text-center">
                <img style={{ marginBottom: "24px" }} src={graytik} alt="" />
                <div className="d-flex justify-content-center">
                  <button>Phase 3</button>
                </div>
              </div>
              <div className="box ms-auto">
                <h6>Expansion</h6>
                <ul>
                  <li>Ethereum Bridge & Uniswap Listing</li>
                  <li>10k+ Holders</li>
                  <li>First 300,000$ Wojakpot Winner</li>
                  <li>CEX Exchanges Listing</li>
                  <li>Twitter Trending</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
