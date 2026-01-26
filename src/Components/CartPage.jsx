import React from "react";
import image2 from "../assets//grayDesk.jpg";
import SubHeader from "./SubHeader";
import "./cartPage.css";

export default function CartPage() {
  return (
    <>
      <SubHeader />
      <p className="yourCart">Your Shopping Cart</p>
      {/* <div className="line"></div> */}
      <div className="basketTitle">
        <p>Nuipen Collection</p>
      </div>
      <div className="shoppingCartContainer">
        <div className="imageAndCartContainer">
          <img src={image2} alt="test-image" />
          {/* mockup image above */}
        </div>
        <div className="cartBasketSection"></div>
      </div>
    </>
  );
}
