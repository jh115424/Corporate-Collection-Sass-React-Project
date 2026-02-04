import React from "react";
import "./furnitureSlab.css";
import ceoVideo from "../assets/Ceo_Testimonial_Luxury_Office_Furniture_V1.mp4";

export default function furnitureSlab() {
  return (
    <>
      <div className="furnitureVideoTestimonialContainer">
        <div className="videoIntroPhrase">
          <p className="phrase">
            Our company makes you look at luxury <br />
            office furniture from a different perspective
          </p>
          <div className="CeoVideoPlayer">
            <video
              controls
              autoPlay
              loop
              muted
              src={ceoVideo}
              className="CEO-Video"
            ></video>
          </div>
        </div>
      </div>
    </>
  );
}
