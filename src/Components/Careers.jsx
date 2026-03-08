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
      </div>
    </>
  );
}

/* 
About Us - A large hero image of a luxury office space at the top, maybe a second image of a sleek conference room halfway down, and a gold divider line between sections like you have elsewhere on your site
Careers - A nice office environment photo at the top, and a simple "No positions available" card centered on the page with your brown and gold styling
Press - A newspaper or media themed background image at the top, and a styled "No press releases available" card matching your brand colors
Privacy Policy & Terms of Service - These don't need images really, but you could add your CC Corporate Collection logo or name at the top in big gold letters, a decorative gold divider line, and style the section headers in your brown color to break up the text and make it look polished instead of just plain text
All of these just need your existing brown and gold color scheme applied consistently and they'll look sharp without being overly complicated!*/
