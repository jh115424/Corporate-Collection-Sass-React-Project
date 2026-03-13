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
              <ScrollLink to="contact" smooth={true} duration={500}>
                CONTACT US
              </ScrollLink>
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
        <div className="tableOfContentLine"></div>
        <div id="collect" className="collectionCriteria">
          <h2 className="criteriaTitle">01 &nbsp; &nbsp; What we collect</h2>
          <p>
            When you interact with us — whether browsing our catalogue, placing
            an order, or <br />
            contacting our design team — we may collect:
          </p>
          <ol className="collectionHistory">
            <li>- Name, email address, and telephone number</li>
            <li>- Billing and delivery address</li>
            <li>- Order history and product preferences</li>
            <li>- Device and browsing data when you visit our website</li>
            <li>- Communications you send us directly</li>
            <br />
            <p>We collect only what is necessary. Nothing more.</p>
          </ol>
          <div className="criteriaUnderline"></div>
        </div>
        <div className="dataUsage"></div>
      </div>
    </>
  );
}

/* 
About Us - A large hero image of a luxury office space at the top, maybe a second image of a sleek conference room halfway down, and a gold divider line between sections like you have elsewhere on your site
Careers - A nice office environment photo at the top, and a simple "No positions available" card centered on the page with your brown and gold styling
Press - A newspaper or media themed background image at the top, and a styled "No press releases available" card matching your brand colors
Privacy Policy & Terms of Service - These don't need images really, but you could add your CC Corporate Collection logo or name at the top in big gold letters, a decorative gold divider line, and style the section headers in your brown color to break up the text and make it look polished instead of just plain text
All of these just need your existing brown and gold color scheme applied consistently and they'll look sharp without being overly complicated! */
