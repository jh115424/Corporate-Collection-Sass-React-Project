import React from "react";
import image2 from "../assets//grayDesk.jpg";
import SubHeader from "./SubHeader";
import "./cartPage.css";
import { useState } from "react";
import { Link } from "react-router";

export default function CartPage() {
  const [count, setCount] = useState(0);
  const [remove, setRemove] = useState(true);
  const [message, setMessage] = useState("");
  const [productRemove, setProductRemove] = useState("");

  const handlePlus = () => {
    setCount(count + 1);
  };

  const handleMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleRemove = () => {
    setRemove(false);
    setMessage(
      "You haven't put any items in your cart. Find something for your office."
    );
    setProductRemove("placeHolderNameHere");
  };

  const tempUndoCart = () => {
    setRemove(true);
    setMessage("");
  };

  return (
    <>
      <SubHeader />
      {remove && (
        <div className="shoppingCartContainer">
          <div className="titleAndImage">
            <p className="yourCart">Your Shopping Cart</p>
            <div>
              <div>
                <img src={image2} alt="test-image" className="productImage" />
              </div>

              <div>
                <p className="productName">placeHolderNameHere (In stock)</p>
                <div className="colorName">
                  <p className="color">Gray</p>

                  <div className="counter">
                    <p onClick={handleMinus} className="minus">
                      -
                    </p>
                    <h1>{count} </h1>
                    <p onClick={handlePlus} className="plus">
                      +
                    </p>
                  </div>

                  <div className="salePrice">
                    <p>MEMBER placeHolderPriceHere</p>
                    <p>REGULAR placeHolderPriceHere</p>
                  </div>
                </div>
              </div>
            </div>

            <p onClick={handleRemove} className="productRemove">
              Remove
            </p>
          </div>

          <div className="rightSide">
            <p className="cartTitle">Nuipen Collection</p>
            <div className="cartBasketSection">
              <p>
                Regular Price <span>PlaceHolderPrice 3000</span>
              </p>
              <p>
                Member Price: <span>PlaceHolderPrice 1234 </span>
              </p>
              <p>
                Member Voucher: <span>PlaceHolderPrice 123</span>
              </p>
              {/* Other cart basket content */}
            </div>
            <p className="cartDisclaimer">Excludes delivery, membership fee</p>
          </div>
        </div>
      )}

      {!remove && (
        <div className="emptyCartMessage">
          {productRemove && (
            <div className="productRemoveMessage">
              <span> *Placeholder furniture* </span>{" "}
              <span className="removeColorChange">removed from your cart</span>.
            </div>
          )}
          <p>{message}</p>

          <Link to="/products">
            <button className="backToProductPage">Start Shopping!</button>
          </Link>
        </div>
      )}
      <div className="testCartButton">
        <button onClick={tempUndoCart}>Bring Back Cart</button>
      </div>
    </>
  );
}
