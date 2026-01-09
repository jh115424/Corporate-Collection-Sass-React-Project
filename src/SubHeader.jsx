import React from "react";
import "./subHeader.css";
import LandingStatement from "./Components/LandingStatement"

export default function SubHeader() {
  return (
    <>
      <div className="dropDownContainer">
        <div className="companyName">
          <p className="ccLogo">CC</p>
          <p className="brandText">Corporate Collection</p>
        </div>
        <div className="platformTopMenuRight">
          <p>Platform</p>
          <p>Solutions</p>
        </div>
        <div className="productsTopMenuLeft">
          <p>Products</p>
          <p>Contact Us</p>
        </div>
      </div>
    </>
  );
}