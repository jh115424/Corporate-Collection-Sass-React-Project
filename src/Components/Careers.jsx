import SubHeader from "./SubHeader";
import { useState } from "react";
import "./careers.css";
import { useEffect } from "react";
import React from "react";
import CareerTopImage from "../assets/CareerImage/CareerTopImageNew.png";
import CareerTopImageNew from "../assets/CareerImage/CareerTopImageNew.png";
import { Link } from "react-router";

export default function Careers() {
  const [headerBg, setHeaderBg] = useState("#0e0e0e");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHeaderBg("white");
      } else {
        setHeaderBg("#0e0e0e");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Link to="/">
        <div
          className="companyName"
          style={{
            backgroundColor: headerBg,
            borderRadius: "50px",
            height: "60px",
            position: "sticky",
            top: "0",
            transition: "all 0.3s ease-in-out",
            zIndex: "10",
            display: "flex",
            marginLeft: "20px",
            alignItems: "center",
            gap: "5px",
            fontSize: "20px",
            fontWeight: "bolder",
          }}
        >
          <p className="ccLogo" style={{ color: "#d4af37" }}>
            CC
          </p>
          <p className="brandText" style={{ color: "#d4af37" }}>
            Corporate Collection
          </p>
        </div>
      </Link>
      <div className="careerContainer">
        <div className="textSection">
          <h1 className="careerHeader">CAREERS</h1>
          <div className="separatorLine"></div>
          <p className="hiringMotto">JOIN THE CC CORPORATE COLLECTION TEAM</p>
        </div>
        <div
          className="careerTopImageTwo"
          style={{ backgroundImage: `url(${CareerTopImageNew})` }}
        ></div>
      </div>

      <div className="availablePositions">
        <h1 className="working">WORK WITH US</h1>
        <div className="separatorLineTwo"></div>
        <br />
        <p className="workWithUsMotto">
          We are always looking for talented individuals who share our passion
          for exceptional <br /> design and uncompromising quality.
        </p>
        <div className="noPositionCard">
          <h1>NO POSITIONS AVAILABLE</h1>
          <br />
          <p className="jobAvailability">
            There are no open positions at this time. <br />
            Please check back soon.
          </p>
        </div>
      </div>
      <div className="companyNameFinisher">
        <p className="ending">Corporate Collection</p>
      </div>
    </>
  );
}
