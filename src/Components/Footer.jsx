import React from "react";
import "./footer.css";
import Terms from "../Components/Terms.jsx";
import { Link } from "react-router";

export default function Footer() {
  return (
    <>
      <div className="FooterContainer">
        <div className="firstFooterColumn">
          <p>Company</p>
          <ul className="footerList">
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/press">Press</Link>
            </li>
          </ul>
        </div>
        <div className="secondFooterColumn">
          <p>Resources</p>
          <ul className="footerList">
            <li>
              <Link to="/careers">Careers</Link>
            </li>
          </ul>
        </div>
        <div className="thirdFooterColumn">
          <p>Support</p>
          <ul className="footerList">
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms">Terms of Service</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="companyNameFinisher">
        <p className="ending">Corporate Collection</p>
      </div>
    </>
  );
}
