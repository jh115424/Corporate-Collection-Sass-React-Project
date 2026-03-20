import React from "react";
import { Link } from "react-router";
import "./privacy.css";
import Footer from "./Footer";
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
            CRAFTED WITH CARE. <br />
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
              <ScrollLink to="rights" smooth={true} duration={500}>
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
            deserve the same discretion as the conversations held within them.
            This policy explains, plainly, how we handle your personal
            information.
          </p>
        </div>
        <div className="tableOfContentLine"></div>
        <div id="collect" className="collectionCriteria">
          <h2>01 &nbsp; &nbsp; What we collect</h2>
          <p>
            When you interact with us — whether browsing our catalogue, placing
            an order, or <br />
            contacting our design team — we may collect:
          </p>
          <ol className="collectionMessage">
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
        <div id="usage" className="dataUsage">
          <h2>02 &nbsp; &nbsp; How we use it</h2>
          <p className="usageMessage">
            Your information is used to fulfil your orders, respond to your
            enquiries, and — where you have given permission — send you updates
            about new collections and events. We do not sell data. We do not use
            it for automated profiling that affects your rights.
          </p>
        </div>
        <div className="titleUnderline"></div>
        <div id="share" className="sharing">
          <h2>03 &nbsp; &nbsp; Sharing your data</h2>
          <p className="sharingMessage">
            We share personal data only with trusted partners essential to
            delivering our service: - Logistics and delivery partners for order
            fulfillment Payment processors operating under strict security
            standards - Our interior design consultants, where you have engaged
            them directly <br /> <br />
            All third parties are bound by confidentiality agreements. We never
            sell or trade your information.
          </p>
        </div>
        <div className="sharingUnderline"></div>
        <div id="cookies" className="cookie">
          <h2>04 &nbsp; &nbsp; Cookies</h2>
          <p className="cookiesMessage">
            We use a minimal set of cookies to keep the site functional and to
            understand how visitors move through it. No third-party advertising
            cookies are placed. You may adjust your preferences at any time via
            the cookie settings in your browser.
          </p>
        </div>
        <div className="cookiesUnderline"></div>
        <div id="rights" className="yourRights">
          <h2>05 &nbsp; &nbsp; Your rights</h2>
          <div className="rightsMessage">
            You have the right to access, correct, or delete any personal data
            we hold. You may also withdraw consent for marketing communications
            at any time. To exercise any of these rights, please contact our
            privacy team using the details below.
          </div>
        </div>
        <div className="rightsUnderline"></div>
        <div id="security" className="security">
          <h2>06 &nbsp; &nbsp; Security</h2>
          <div className="securityMessage">
            We maintain industry-standard technical and organizational measures
            to protect your data from unauthorized access, loss, or disclosure.
            Our systems are reviewed regularly and updated in line with best
            practice.
          </div>
        </div>

        <div id="contact" className="howToReach">
          <h2 className="getInTouchHeader">GET IN TOUCH</h2>
          <br />
          <p className="contactInfoEnding">
            Questions, requests, or concerns about how we handle your data are{" "}
            always welcome. Write to us at CC Corporate Collections., 1370 S.{" "}
            Illinois Drive, Suite 1820, Floor 18, Chicago, Illinois 60621
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
