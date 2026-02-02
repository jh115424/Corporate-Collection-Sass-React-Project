import React from "react";
import SubHeader from "./SubHeader";
import "./cartPage.css";
import { useState } from "react";
import { Link } from "react-router";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";

export default function CartPage({ cart, setCart }) {
  const [isSending, setIsSending] = useState(false);

  const handlePlus = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = (updatedCart[index].quantity || 1) + 1;
    setCart(updatedCart);
  };

  const handleMinus = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCart(updatedCart);
    }
  };

  const handleRemove = (index) => {
    const updatedCart = cart.filter((item, i) => i !== index);
    setCart(updatedCart);
  };

  const emailHandleClick = (e) => {
    e.preventDefault();

    setIsSending(true);

    const serviceId = "service_8fxa1nn";
    const templateId = "template_r3ycwdo";
    const publicKey = "74BZsOVATORg5niqu";

    const templateParams = {
      name: "Atlas Enterprises",
      time: "2:30pm",
      title: "Order Confirmation",
      email: "jenniferehodge1@gmail.com",
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        alert("Email sent successfully");
      })
      .catch((error) => {
        console.error("Failed to send email", error);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <>
      <SubHeader />

      {cart.length > 0 && (
        <div className="shoppingCartContainer">
          <div className="titleAndImage">
            <p className="dividerLine"></p>
            <p className="yourItem">Product</p>
            {cart.map((furniture, index) => (
              <div key={index}>
                <div>
                  <img
                    src={furniture.imageURL}
                    alt="test-image"
                    className="productImage"
                  />
                </div>

                <div>
                  <p className="productName">{furniture.name} (In stock)</p>
                  <div className="colorName">
                    <p className="color">Gray</p>

                    <div className="counter">
                      <p onClick={() => handleMinus(index)} className="minus">
                        -
                      </p>
                      <h1>{furniture.quantity || 1}</h1>
                      <p onClick={() => handlePlus(index)} className="plus">
                        +
                      </p>
                    </div>
                    <div className="salePrice">
                      <p>MEMBER ${(furniture.price * 0.75).toFixed(2)}</p>
                      <p>REGULAR ${furniture.price.toFixed(2)}</p>
                    </div>
                  </div>
                </div>

                <p
                  onClick={() => handleRemove(index)}
                  className="productRemove"
                >
                  Remove
                </p>
              </div>
            ))}
          </div>

          <div className="rightSide">
            <div className="cartBasketSection">
              <p>
                Regular Price{" "}
                <span>
                  $
                  {cart
                    .reduce(
                      (total, item) =>
                        total + item.price * (item.quantity || 1),
                      0
                    )
                    .toFixed(2)}
                </span>
              </p>
              <p>
                Member Price:{" "}
                <span>
                  $
                  {(
                    cart.reduce(
                      (total, item) =>
                        total + item.price * (item.quantity || 1),
                      0
                    ) * 0.75
                  ).toFixed(2)}
                </span>
              </p>
              <p>
                Member Voucher:{" "}
                <span>
                  $
                  {(
                    cart.reduce(
                      (total, item) =>
                        total + item.price * (item.quantity || 1),
                      0
                    ) * 0.25
                  ).toFixed(2)}
                </span>
              </p>
            </div>
            <p className="cartDisclaimer">Excludes delivery, membership fee</p>
            <Link to="/checkoutPage">
              <button className="checkoutButton">CHECKOUT</button>
            </Link>
            <button
              onClick={emailHandleClick}
              disabled={isSending}
              className="emailButton"
            >
              {isSending ? "Sending..." : "Send Email"}
            </button>

            <Link to="/products" className="keepShopping">
              Continue Shopping
            </Link>
            <p className="timeFrame">
              *Estimated shipping time will be calculated at checkout*
            </p>
          </div>
        </div>
      )}

      {cart.length === 0 && (
        <div className="emptyCartMessage">
          <p>
            You haven't put any items in your cart. Find something for your
            office.
          </p>

          <Link to="/products">
            <button className="backToProductPage">Start Shopping!</button>
          </Link>
        </div>
      )}
      <p className="dividerLineBottom"></p>
      <Footer />
    </>
  );
}
