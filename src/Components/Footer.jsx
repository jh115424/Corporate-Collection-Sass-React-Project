import React from "react";
import "./footer.css";
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
              <Link to="/careers">Careers</Link>
            </li>
            <li>
              <Link to="/press">Press</Link>
            </li>
          </ul>
        </div>
        <p className="secondFooterColumn">Resources</p>
        <p className="thirdFooterColumn">Support</p>
      </div>

      <div className="companyNameFinisher">
        <p className="ending">Corporate Collection</p>
      </div>
    </>
  );
}

// Add to your existing Company column:
// Company - About Us, Careers, Press
// Legal - Privacy Policy, Terms of Service
// Contact Info - Email address, Phone number, Location/City
