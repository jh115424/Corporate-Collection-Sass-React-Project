import React from "react";
import image2 from "../assets//grayDesk.jpg";
import SubHeader from "./SubHeader";
import "./cartPage.css";

export default function CartPage() {
  return (
    <>
      <SubHeader />
      <div className="shoppingCartContainer">
        <div className="imageAndCartContainer">
          <img src={image2} alt="test-image" />
          {/* test image above */}
        </div>
        <div className="cartBasketSection"></div>
      </div>
    </>
  );
}
