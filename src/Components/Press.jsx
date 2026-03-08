import React from "react";
import { Link } from "react-router";
import "./press.css";



export default function Press() {
  return (
    <>
      <Link to="/">
        <div
          className="companyName"
          style={{
            backgroundColor: "#0e0e0e",
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
      <div className="pressMainContainer">
        <div className="pressLeftSide">
          <h1 className="leftHeader">
            PRESS <br />& <br />
            MEDIA
          </h1>
          <div className="goldDivider"></div>
          <p className="announcement">
            News & Updates from <br />
            CC Corporate <br />
            Collection
          </p>
        </div>
        <div className="pressRightSide">
          <div className="cardInfo">
            <h1 className="rightHeader">
              No Press Releases Available
              <p className="pressAnnouncement">
                We have no press <br /> releases at this time. Please check back
                soon for updates, announcements, and media coverage from CC
                Corporate Collection.
              </p>
            </h1>
          </div>
        </div>
      </div>
        <div className="companyNameFinisher">
        <p className="ending">Corporate Collection</p>
      </div>
       {/* <Footer/> */}
      {/* <SubHeader /> */}
    </>
  );
}

/* 
About Us - A large hero image of a luxury office space at the top, maybe a second image of a sleek conference room halfway down, and a gold divider line between sections like you have elsewhere on your site
Careers - A nice office environment photo at the top, and a simple "No positions available" card centered on the page with your brown and gold styling
Press - A newspaper or media themed background image at the top, and a styled "No press releases available" card matching your brand colors
Privacy Policy & Terms of Service - These don't need images really, but you could add your CC Corporate Collection logo or name at the top in big gold letters, a decorative gold divider line, and style the section headers in your brown color to break up the text and make it look polished instead of just plain text
All of these just need your existing brown and gold color scheme applied consistently and they'll look sharp without being overly complicated! */
