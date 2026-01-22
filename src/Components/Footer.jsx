// import React, { useEffect } from "react";
import React from "react";
import "./footer.css";
import { Link } from "react-router";
// import { useRef } from "react";

export default function Footer() {
  //   const pullDownName = useRef(null);

  //   useEffect(() => {
  //     let wordObserve = new IntersectionObserver((entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           console.log("Name is in view");

  //           pullDownName.current.classList.add("ending-active");
  //         }
  //       });
  //     });

  //     wordObserve.observe(pullDownName.current);

  //     return () => {
  //       wordObserve.disconnect();
  //     };
  //   }, []);

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
