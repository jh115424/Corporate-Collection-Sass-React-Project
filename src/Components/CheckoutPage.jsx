import React from "react";
import { Link } from "react-router";
import { Route } from "react-router";
import ProductsPage from "./ProductsPage";
import "./checkOutPage.css";
import { useState } from "react";
import Footer from "./Footer";
import { useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function CheckoutPage({ cart, setCart }) {
  const [companyEmail, setCompanyEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [suiteOrFloor, setSuiteOrFloor] = useState("");
  const [country, setCountry] = useState("");
  const [cardType, setCardType] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [specialInstructions, setSpecialInstructions] = useState("");

  const [orderTotal, setOrderTotal] = useState(0);
  const [listOfItems, setListOfItems] = useState("");

  const [send, setIsSending] = useState(false);

  const [subtotal, setSubtotal] = useState(0);
  const [memberDiscount, setMemberDiscount] = useState(0);
  const [salesTax, setSalesTax] = useState(0);

  const [dateAndTime, setDateAndTime] = useState("");

  useEffect(() => {
    const calculateTotal = cart.reduce(
      (total, item) => total + item.price * (item.quantity || 1),
      0,
    );

    const calculateDiscount = calculateTotal * 0.25;

    const calculateSalesTax = (calculateTotal - calculateDiscount) * 0.055;

    const finalTotal = calculateTotal - calculateDiscount + calculateSalesTax;

    // eslint-disable-next-line react-hooks/exhaustive-deps
    setOrderTotal(finalTotal);

    setSubtotal(calculateTotal);
    setMemberDiscount(calculateDiscount);
    setSalesTax(calculateSalesTax);
  }, [cart]);

  const emailCompanyHandleClick = (e) => {
    e.preventDefault();

    setIsSending(true);

    const cartDetailsArray = cart.map((item) => {
      const cartItemsString = `${item.quantity} ${item.name} @ $${item.price}`;
      return cartItemsString;
    });

    const cartDetails = cartDetailsArray.join(", ");

    setListOfItems(cartDetails);

    setDateAndTime(new Date().toLocaleString());

    const serviceId = "service_8fxa1nn";
    const templateId = "template_r3ycwdo";
    const publicKey = "74BZsOVATORg5niqu";

    const checkoutDataParams = {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      companyEmail: companyEmail,
      businessName: businessName,
      shippingAddress: shippingAddress,
      suiteOrFloor: suiteOrFloor,
      city: city,
      state: state,
      zipCode: zipCode,
      country: country,
      cardType: cardType,
      cardNumber: cardNumber,
      specialInstructions: specialInstructions,
      orderTotal: orderTotal,
      listOfItems: listOfItems,
      dateAndTime: dateAndTime,
    };

    emailjs
      .send(serviceId, templateId, checkoutDataParams, publicKey)
      .then((response) => {
        console.log(
          "Order email sent successfully!",
          response.status,
          response.text,
        );
        alert("Order email sent successfully!");
        setCart([]);
      })
      .catch((error) => {
        console.error("Failed to send order email", error);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <>
      <p className="title">FINALIZE YOUR ORDER - CHECKOUT</p>
      <p className="subTitle">
        Secure Payment Processing • Complimentary White Glove Delivery
      </p>

      <div className="checkoutContainer">
        <div className="customerInfoAndDelivery">
          <form
            id="checkout-form"
            className="checkout-form"
            onSubmit={emailCompanyHandleClick}
          >
            <p className="sectionHeader">Customer Information</p>
            <div className="formUnderline"></div>
            <label htmlFor="email">EMAIL ADDRESS</label>
            <input
              id="email"
              type="email"
              value={companyEmail}
              onChange={(e) => setCompanyEmail(e.target.value)}
              required
            />

            <label htmlFor="firstName">FIRST NAME</label>
            <input
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />

            <label htmlFor="lastName">LAST NAME</label>
            <input
              id="lastName"
              type="text"
              value={lastName}
              L
              onChange={(e) => setLastName(e.target.value)}
              required
            />

            <label htmlFor="phoneNUmber">PHONE NUMBER</label>
            <input
              id="phoneNumber"
              type="tel"
              value={phoneNumber}
              onChange={(e) => {
                const filtered = e.target.value.replace(/[^0-9-]/g, "");
                setPhoneNumber(filtered);
              }}
              required
            />

            <p className="sectionHeader">Delivery Address</p>
            <div className="formUnderline"></div>

            <label htmlFor="businessName">BUSINESS NAME (OPTIONAL)</label>
            <input
              id="businessName"
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
            />

            <label htmlFor="shippingAddress">SHIPPING ADDRESS</label>
            <input
              id="shippingAddress"
              type="text"
              value={shippingAddress}
              onChange={(e) => setShippingAddress(e.target.value)}
              required
            />

            <label htmlFor="suiteOrFloor">SUITE/BUILDING/FLOOR</label>
            <input
              id="suiteOrFloor"
              type="text"
              value={suiteOrFloor}
              onChange={(e) => setSuiteOrFloor(e.target.value)}
            />

            <label htmlFor="city">CITY</label>
            <input
              id="city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />

            <label htmlFor="state">STATE</label>
            <input
              id="state"
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            />

            <label htmlFor="zipCode">ZIP CODE</label>
            <input
              id="zipCode"
              type="text"
              value={zipCode}
              onChange={(e) => {
                const filtered = e.target.value.replace(/[^0-9-]/g, "");
                setZipCode(filtered);
              }}
              required
            />

            <label htmlFor="country">COUNTRY</label>
            <input
              id="country"
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />

            <p className="sectionHeader">Payment Method</p>
            <label htmlFor="cardType">Payment Type</label>
            <select
              id="cardType"
              value={cardType}
              onChange={(e) => setCardType(e.target.value)}
              className="cardTypeBox"
              required
            >
              <option value="">Select Card</option>
              <option value="Visa">Visa</option>
              <option value="MasterCard">MasterCard</option>
              <option value="Amex">Amex</option>
              <option value="Discover">Discover</option>
            </select>

            <label htmlFor="cardNumber">ENTER CARD NUMBER</label>
            <input
              id="cardNumber"
              type="text"
              value={cardNumber}
              onChange={(e) => {
                const filtered = e.target.value.replace(/[^0-9-]/g, "");
                setCardNumber(filtered);
              }}
              required
            />

            <label htmlFor="specialInstructions">SPECIAL INSTRUCTIONS</label>
            <textarea
              id="specialInstructions"
              type="text"
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              className="textAreaBox"
            />
          </form>
        </div>

        <div className="orderInformation">
          <p className="orderFormHeader">Your Order</p>

          {cart.length > 0 && (
            <div className="checkoutBasketContainer">
              {cart.map((furniture, index) => (
                <div key={index}>
                  <div className="cartFurnitureInfo">
                    <img
                      src={furniture.imageURL}
                      className="checkOutFurnitureImage"
                    />
                    <div className="checkoutFurnitureName">
                      {furniture.name && <span>{furniture.name}</span>}
                    </div>
                    <div className="checkoutFurniturePrice">
                      {furniture.price && <span>{`$${furniture.price}`}</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="finalPriceContainer">
            <div className="orderTotalLine"></div>
            <div className="pricingBreakdown">
              <p className="subTotal">Subtotal: {`$${subtotal.toFixed(2)}`}</p>
              <p className="memberDiscount">
                Member Discount: <span>{`$${memberDiscount.toFixed(2)}`}</span>
              </p>
              <p className="whiteGlove">
                White Glove Service: <span>FREE</span>
              </p>
              <p className="salesTax">Sales Tax: {`$${salesTax.toFixed(2)}`}</p>
              <div className="secondOrderTotalLine"></div>
              <p className="orderTotal">
                Total: <span>{`$${orderTotal.toFixed(2)}`}</span>
              </p>
            </div>
          </div>

          <button
            type="submit"
            form="checkout-form"
            disabled={send}
            className="sendOrderButton"
          >
            {send ? "Sending email..." : "Place Order"}
          </button>
          <div className="disclaimer">🔒 Secure 256-bit Encrypted Payment</div>
          <div className="servicePackageTitle">
            ✓ Premium Service PackageExpert assembly & installation • 60-day
            satisfaction guarantee • Dedicated support team
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
