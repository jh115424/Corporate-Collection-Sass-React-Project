import React from "react";
import { Link } from "react-router";
import "./privacy.css";
import SubHeader from "./SubHeader";
import { Link as ScrollLink } from "react-scroll";
import PrivacyImage from "../assets/PrivacyImage/PrivacyHeaderImage.png";

export default function Privacy() {
  return (
    <>
      <div className="grandMainContainer">
        <div className="mainHeaderContainer">
          <Link to="/">
            <div
              className="companyName"
              style={{
                borderRadius: "50px",
                height: "60px",
                position: "sticky",
                top: "0",
                transition: "all 0.3s ease-in-out",
                zIndex: "10",
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

          <div className="privacyTitle">
            <p> PRIVACY & DATA POLICY</p>
          </div>
        </div>
        <div className="titleUnderline"></div>
        <p className="legalName">LEGAL</p>
        <div className="legalBodyContainer">
          <div className="legalImage"></div>

          <div className="topMessage">
            <h2 className="messageMottoTwo">
              Your privacy <br />
              <span>is not </span>a footnote
            </h2>
          </div>
        </div>
        <div className="messageMottoThree">
          <p>
            CRAFTER WITH CARE. <br />
            HANDLED WITH DISCRETION.
          </p>
        </div>
        <div className="privacyUnderline"></div>
        <div className="tableOfContents">
          <ol>
            <li className="contentsHeader">CONTENTS</li> <br />
            <li>
              <ScrollLink to="collect" smooth={true} duration={500}>
                WHAT WE COLLECT
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="usage" smooth={true} duration={500}>
                {" "}
                HOW WE USE IT
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="share" smooth={true} duration={500}>
                SHARING YOUR DATA
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="cookies" smooth={true} duration={500}>
                COOKIES
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="right" smooth={true} duration={500}>
                YOUR RIGHTS
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="security" smooth={true} duration={500}>
                SECURITY
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
              ></ScrollLink>
              CONTACT US
            </li>
          </ol>
        </div>
        <div className="tableOfContentLine"></div>
        <div className="productionDate">
          <p>Effective date</p>
          <p>March 2026</p> <br />
          <p>Version 3.1</p>
        </div>
        <div className="tableOfContentLine"></div>
        <div className="ccSecondMotto">
          <p>
            At CC Corporate Collection, we believe the spaces you work in
            deserve the same <br />
            discretion as the conversations held within them. This policy
            explains, plainly,
            <br /> how we handle your personal information.
          </p>
        </div>
      </div>
    </>
  );
}

/* 5:42 PMTerms of Service
Effective Date: January 1, 2024
By accessing CC Corporate Collection's website and wholesale program, you agree to the following terms:
Wholesale Eligibility
Access to our wholesale program is limited to verified business entities only. CC Corporate Collection reserves the right to approve or deny any wholesale application at its sole discretion.
Orders & Payment
All orders are final upon confirmation. Payment is due in full at time of order. CC Corporate Collection accepts Visa, MasterCard, American Express, and Discover.
Pricing
All prices are listed in US dollars and are subject to change without notice. Wholesale pricing is exclusive to approved members and may not be shared with unauthorized parties.
Delivery
White glove delivery and professional installation is complimentary on all orders. Delivery timeframes vary by location and will be confirmed at time of order. CC Corporate Collection is not responsible for delays caused by circumstances beyond our control.
Returns & Exchanges
All sales are subject to our 60-day satisfaction guarantee. Items must be returned in original condition. Custom orders are non-refundable.
Intellectual Property
All content on this website including images, text, and logos are the exclusive property of CC Corporate Collection and may not be reproduced without written permission.
Governing Law
These terms are governed by the laws of the State of New York.
Contact Us
For questions regarding these terms, contact us at legal@cccorporatecollection.com */

/* 
About Us - A large hero image of a luxury office space at the top, maybe a second image of a sleek conference room halfway down, and a gold divider line between sections like you have elsewhere on your site
Careers - A nice office environment photo at the top, and a simple "No positions available" card centered on the page with your brown and gold styling
Press - A newspaper or media themed background image at the top, and a styled "No press releases available" card matching your brand colors
Privacy Policy & Terms of Service - These don't need images really, but you could add your CC Corporate Collection logo or name at the top in big gold letters, a decorative gold divider line, and style the section headers in your brown color to break up the text and make it look polished instead of just plain text
All of these just need your existing brown and gold color scheme applied consistently and they'll look sharp without being overly complicated! */
