import React, { useEffect } from "react";
import "./footer.css";
import { useRef } from "react";

export default function Footer() {
  const pullDownName = useRef(null);

  useEffect(() => {
    let wordObserve = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Name is in view");

          pullDownName.current.classList.add("ending-active");
        }
      });
    });

    wordObserve.observe(pullDownName.current);

    return () => {
      wordObserve.disconnect();
    };
  }, []);

  return (
    <>
      <div className="FooterContainer">
        <p className="firstFooterColumn">Company</p>
        <p className="secondFooterColumn">Resources</p>
        <p className="thirdFooterColumn">Support</p>
      </div>
      <div className="companyNameFinisher">
        <p ref={pullDownName} className="ending">
          Corporate Collection
        </p>
      </div>
    </>
  );
}


