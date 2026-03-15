import { Link } from "react-router";
import React from "react";
import "./terms.css";
import { Link as ScrollLink } from "react-scroll";
import SubHeader from "./SubHeader";
import Footer from "./Footer";

export default function Terms() {
  return (
    <>
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
            <p className="ccLogo" style={{ color: "white" }}>
              CC
            </p>
            <p className="brandText" style={{ color: "#504f4b6f" }}>
              Corporate Collection
            </p>
          </div>
        </Link>

        <div className="privacyTitle">
          <p> TERMS AND CONDITIONS</p>
        </div>
      </div>
      <div className="titleUnderline"></div>

      <div className="termsBodyWrap">
        <div className="termsSidebar">
          <p className="termsSidebarLabel">Contents</p>
          <ul className="termsTocList">
            <li>
              <ScrollLink to="website" smooth={true} duration={500}>
                Use of this website
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="orders" smooth={true} duration={500}>
                Orders &amp; availability
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="ip" smooth={true} duration={500}>
                Intellectual property
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="liability" smooth={true} duration={500}>
                Limitation of liability
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="contact" smooth={true} duration={500}>
                Questions
              </ScrollLink>
            </li>
          </ul>
          <div className="termsDateBlock">
            Effective date
            <br />
            March 2026
            <br />
            <br />
            Version 2.0
          </div>
        </div>

        <div className="termsContent">
          <p className="termsIntroText">
            We believe the spaces you work in deserve the same integrity as the
            agreements that support them. These terms govern your use of the CC
            Corporate Collection website and our services.
          </p>

          <div className="termsSection" id="website">
            <div className="termsSectionHeader">
              <span className="termsSectionNum">01</span>
              <h2 className="termsSectionTitle">Use of this website</h2>
            </div>
            <p>
              By accessing or using the CC Corporate Collection website, you
              agree to be bound by these terms. Please read them carefully
              before browsing our catalogue or placing an order. If you do not
              agree, we ask that you discontinue use of the site.
            </p>
            <p>
              This website is intended for professional and personal use in
              connection with our furniture and workspace products. Any
              unauthorised commercial use is strictly prohibited.
            </p>
          </div>

          <hr className="termsDivider" />

          <div className="termsSection" id="orders">
            <div className="termsSectionHeader">
              <span className="termsSectionNum">02</span>
              <h2 className="termsSectionTitle">Orders &amp; availability</h2>
            </div>
            <p>
              All products are subject to availability. CC Corporate Collection
              reserves the right to discontinue any item, adjust pricing, or
              modify specifications without prior notice. Orders are confirmed
              only upon receipt of a written confirmation from our team.
            </p>
            <p>
              Custom and bespoke orders are non-refundable once production has
              commenced.
            </p>
          </div>

          <hr className="termsDivider" />

          <div className="termsSection" id="ip">
            <div className="termsSectionHeader">
              <span className="termsSectionNum">03</span>
              <h2 className="termsSectionTitle">Intellectual property</h2>
            </div>
            <p>
              All content on this website — including photography, copy, product
              descriptions, and design — is the intellectual property of CC
              Corporate Collection and may not be reproduced or distributed
              without express written permission.
            </p>
            <p>
              Unauthorised use of any materials may give rise to a claim for
              damages and may constitute a criminal offence under applicable
              law.
            </p>
          </div>

          <hr className="termsDivider" />

          <div className="termsSection" id="liability">
            <div className="termsSectionHeader">
              <span className="termsSectionNum">04</span>
              <h2 className="termsSectionTitle">Limitation of liability</h2>
            </div>
            <p>
              We endeavour to ensure all information on this site is accurate
              and up to date, but accept no liability for loss or damage arising
              from reliance on it. Our liability in connection with any purchase
              is limited to the value of that purchase.
            </p>
            <p>
              We are not liable for indirect, consequential, or incidental
              losses of any kind.
            </p>
          </div>

          <div className="termsClosingBlock" id="contact">
            <p className="termsClosingLabel">A final word</p>
            <p className="termsClosingQuote">
              "We stand behind every piece we make — and every word we put in
              writing."
            </p>
            <p className="termsClosingContact">
              Questions? Reach us at legal@corporatecollection.com
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
