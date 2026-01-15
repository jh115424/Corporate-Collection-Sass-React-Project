import React from "react";
import "./statsSection.css";

export default function StatsSection() {
  return (
    <>
      <div className="keyStatsContainer">
        <div className="cardContainer">
          <div className="card1">
            <p className="numberStat">500+ projects</p>
            <p className="statement">Our Impact</p>
          </div>
          <div className="card2">
            <p className="numberStat">$50M Revenue</p>
            <p className="statement">Performance Metrics</p>
          </div>
          <div className="card3"></div>
          <div className="card4"></div>
        </div>
      </div>
      <p className="disclaimer">
        Portfolio demonstration. Logos used for presentation purposes only."
      </p>
    </>
  );
}
