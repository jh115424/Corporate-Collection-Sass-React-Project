import React from "react";
import SubHeader from "./SubHeader";
import "./aboutUs.css";
import Footer from "./Footer";
import LuxuryOffice from "../assets/FooterImages/LuxuryOffice.png";
import LuxuryOffice2 from "../assets/FooterImages/LuxuryOffice2.png";

import { Link } from "react-router";

export default function AboutUs() {
  return (
    <>
      <SubHeader />

      <div className="aboutUsContainer">
        <div className="heroBackgroundImage">
          <h1 className="heroHeader">About Us</h1>
          <div className="gold-divider"></div>
          <p className="heroMotto">ELEVATING CORPORATE SPACES SINCE 2020</p>
        </div>
        <div className="biographyContainer">
          <h1 className="biographyHeader">WHO WE ARE</h1>
          <div className="gold-divider"></div>
          <p className="biographyParagraph">
            Founded in 2018, CC Corporate Collection was born from a simple
            belief — that the spaces where business happens should be as refined
            as the work conducted within them. Headquartered in New York City,
            we partner exclusively with businesses, interior designers, and
            corporate developers who demand more than furniture. They demand a
            statement. Our curated collection features premium executive desks,
            conference systems, and ergonomic seating sourced from the world's
            most respected manufacturers. Every piece is selected for its
            craftsmanship, durability, and timeless aesthetic. We don't sell to
            everyone — and that's intentional. Our wholesale program is designed
            for professionals who understand that the right environment drives
            productivity, culture, and success. Our Mission To elevate every
            corporate space with furniture that commands respect, inspires
            performance, and reflects the ambition of the people within it. Why
            Choose Us With over 500 corporate clients across North America,
            we've furnished boardrooms, executive suites, and open workspaces
            for some of the most recognizable companies in the country. Our
            white glove delivery and installation service ensures every piece
            arrives and is placed perfectly — every time.{" "}
          </p>
        </div>
        <div className="full-divider"></div>
        <div className="statisticsContainer">
          <div className="statsBreakdown">
            <p>
              <span>500+</span> <br />
              CORPORATE CLIENTS
            </p>
            <p>
              <span>6+</span> <br />
              YEARS IN BUSINESS
            </p>
            <p>
              <span>50+</span> <br />
              PREMIUM BRANDS
            </p>
            <p>
              <span>100%</span> <br />
              WHITE GLOVE DELIVERY
            </p>
          </div>
        </div>
        <div className="full-divider"></div>
        <div className="heroMiddleImage">
          <h1 className="heroMiddleHeader">CRAFTED FOR THE BOARDROOM</h1>
          <div className="gold-divider"></div>

          <p className="middleImageMotto">
            PREMIUM CONFERENCE & EXECUTIVE FURNISHINGS
          </p>
        </div>
        <div className="full-divider"></div>
        <div className="missionStatementContainer">
          <h1 className="missionHeader">OUR MISSION</h1>
          <div className="gold-divider"></div>
        </div>
        <div className="missionStatement">
          <p>
            To elevate every corporate space with furniture that commands
            respect, inspires performance, and reflects the ambition of the
            people within it. We don't sell to everyone — and that's
            intentional. We believe that great design is not a luxury — it is a
            necessity. Every desk, every chair, every conference table we place
            is a deliberate choice to honor the people who use it and the vision
            of the company they're building. Our partnerships are selective
            because our standards are high. When you work with CC Corporate
            Collection, you're not just furnishing an office — you're making a
            statement about who you are and where you're going.
          </p>
        </div>
        <div className="full-divider"></div>
        <Footer />
      </div>
    </>
  );
}
