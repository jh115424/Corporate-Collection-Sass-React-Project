import { useState } from "react";
import "./topHeader.css";
import SubHeader from "./SubHeader";

export default function TopHeader() {
  const [clearBanner, setClearBanner] = useState(false);

  const removeHandleClick = () => {
    setClearBanner(true);
  };

  return (
    <>
      {!clearBanner && (
        <div className="promoBanner">
          <div className="topBlackHeader">
            <p className="headerSentence">
              Elevate your corporate environment with handpicked luxury
              essentials.
            </p>
          </div>
          <div className="hideBanner" onClick={removeHandleClick}>
            X
          </div>
        </div>
      )}
    </>
  );
}
