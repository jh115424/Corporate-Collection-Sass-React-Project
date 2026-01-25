import React from "react";
import "./subHeader.css";
import LandingStatement from "./LandingStatement";
import { Link } from "react-router";

export default function SubHeader() {
  return (
    <>
      <div className="dropDownContainer">
        <Link to="/">
          <div className="companyName">
            <p className="ccLogo">CC</p>
            <p className="brandText">Corporate Collection</p>
          </div>
        </Link>
        <div className="productsTopMenuLeft">
          <div className="gettingStartedAndDemoSection">
            <Link to="/wholesale">
              <button className="wholesaleButton">Wholesale Inquiries</button>
            </Link>
            <Link to="/consultation">
              <button className="schedulingButton">
                Schedule a Consultation{" "}
              </button>
            </Link>
          </div>
          <Link to="/products">
            <button className="productsButton">Products</button>
          </Link>

          <Link to="/contact">
            <button className="contactButton">Contact Us</button>
          </Link>
        </div>
      </div>
    </>
  );
}
