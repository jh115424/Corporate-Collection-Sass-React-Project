import React from "react";
import "./landingPageTopImage.css";
import { useState } from "react";
import { useEffect } from "react";
import image1 from "../assets/officeExamples.webp";
import image2 from "../assets/grayDesk.jpg";
import image3 from "../assets/modern-company-manager-workplace-bright-office.jpg";
import TrustedClients from "./TrustedClients";

const topImages = [image1, image2, image3];
export default function LandingPageTopImage() {
  const [changePicture, setChangePicture] = useState(image1);

  useEffect(() => {
    let imageIndex = 0;
    const imageInterval = setInterval(() => {
      imageIndex = (imageIndex + 1) % topImages.length;
      setChangePicture(topImages[imageIndex]);
    }, 4000);

    return () => clearInterval(imageInterval);
  }, []);

  return (
    <>
      <div className="topImageContainer">
        <img src={changePicture} alt="meetingRoom" className="threeImages" />
      </div>
       <TrustedClients />
    </>
  );
 
}
