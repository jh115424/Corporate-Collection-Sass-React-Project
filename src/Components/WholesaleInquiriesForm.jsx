import { useState } from "react";
import "./wholesaleInquiriesForm.css";
import SubHeader from "./SubHeader";
import emailjs from "@emailjs/browser";
import React from "react";

import TurnstoneLDesk from "../assets/CategoryFurniture/ExecutiveDeskImages/GTBlackTurnstoneLDesk.jpg";
import DomesDesk from "../assets/CategoryFurniture/ExecutiveDeskImages/DomestoLDesk.jpg";
import LDesk from "../assets/CategoryFurniture/ExecutiveDeskImages/LShapedDesk.jpg";
import NuipenDesk from "../assets/CategoryFurniture/ExecutiveDeskImages/NuipensDesk.jpg";
import Footer from "./Footer";

export default function WholesaleInquiriesForm() {
  const [companyName, setCompanyName] = useState("");
  const [contactName, setContactName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [businessYears, setBusinessYears] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [primaryInterest, setPrimaryInterest] = useState("");
  const [message, setYourMessage] = useState("");

  const [orderVolume, setOrderVolume] = useState("");
  const [send, setIsSending] = useState(false);
  const [website, setWebsite] = useState("");

  const wholeSaleEmailHandleClick = (e) => {
    e.preventDefault();

    setIsSending(true);

    const serviceId = "service_8fxa1nn";
    const templateId = "template_r3ycwdo";
    const publicKey = "74BZsOVATORg5niqu";

    const sendWholeSaleDataParams = {
      companyName: companyName,
      contactName: contactName,
      jobTitle: jobTitle,
      email: email,
      phoneNumber: phoneNumber,
      businessType: businessType,
      businessYears: businessYears,
      city: city,
      state: state,
      orderVolume: orderVolume,
      primaryInterest: primaryInterest,
      message: message,
      website: website,
    };

    emailjs
      .send(serviceId, templateId, sendWholeSaleDataParams, publicKey)
      .then((response) => {
        console.log(
          "Wholesale request sent successfully!",
          response.status,
          response.text,
        );
        alert("Wholesale request sent successfully!");
        setCompanyName();
        setContactName("");
        setJobTitle("");
        setEmail("");
        setPhoneNumber("");
        setBusinessType("");
        setBusinessYears("");
        setCity("");
        setState("");
        setOrderVolume("");
        setPrimaryInterest("");
        setYourMessage("");
      })
      .catch((error) => {
        console.error("Wholesale email failed to send", error);
      })
      .finally(() => {
        setIsSending(false);
      });
  };
  return (
    <>
      <SubHeader />
      <div className="wholeSaleInquiriesContainer">
        <h1 className="title">
          Wholesale Program
          <p>Premium Partnership Program</p>
        </h1>
      </div>
      <div className="flexContainer">
        <div className="companyInfoContainer">
          <h3>| COMPANY & CONTACT</h3>
          <form className="wholeSale-form-topLine">
            <label htmlFor="name">
              COMPANY NAME<span>*</span>
            </label>
            <input
              id="name"
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
            <div className="wholeSale-form-secondRow">
              <label htmlFor="contactName">
                CONTACT NAME<span>*</span>
              </label>
              <input
                id="contactName"
                type="text"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
              />
              <label htmlFor="jobTitle">
                JOB TITLE<span>*</span>
              </label>
              <input
                id="jobTitle"
                type="text"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </div>
            <div className="wholeSale-form-thirdRow">
              <label htmlFor="email">
                EMAIL<span>*</span>
              </label>
              <input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="phoneNumber">
                PHONE<span>*</span>
              </label>
              <input
                id="phoneNumber"
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="businessDetailsDivider"></div>
            <h3>| BUSINESS DETAILS</h3>
            <div className="wholeSale-form-forthRow">
              <label htmlFor="businessType">
                BUSINESS TYPE<span>*</span>
                <p className="businessExamples">
                  Ex. Furniture Retailer, Interior Design, etc
                </p>
              </label>
              <input
                id="businessType"
                type="text"
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
              />
              <label htmlFor="businessYears">
                BUSINESS YEARS<span>*</span>
              </label>
              <input
                id="businessYears"
                type="text"
                value={businessYears}
                onChange={(e) => setBusinessYears(e.target.value)}
              />
            </div>
            <div className="wholeSale-form-fifthRow">
              <label htmlFor="city">
                CITY<span>*</span>
              </label>
              <input
                id="city"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <label htmlFor="state">
                STATE<span>*</span>
              </label>
              <input
                id="state"
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div className="wholeSale-form-sixthRow">
              <label htmlFor="website" className="websiteHeader">
                WEBSITE<span>*</span>
              </label>
              <input
                id="website"
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>
            <div className="wholeSale-form-seventhRow">
              <label htmlFor="orderVolume">
                EXPECTED ORDER VOLUME<span>*</span>
              </label>
              <select
                id="orderVolume"
                value={orderVolume}
                onChange={(e) => setOrderVolume(e.target.value)}
              >
                <option value="">Select Range</option>
                <option value="5-20k">$5k - $20k</option>
                <option value="20-50k">$20k - $50k</option>
                <option value="50-100k">$50k - $100k</option>
                <option value="100k+">$100k+</option>
              </select>
              <label htmlFor="primaryInterest">
                PRIMARY INTEREST<span>*</span>
              </label>
              <select
                id="primaryInterest"
                value={primaryInterest}
                onChange={(e) => setPrimaryInterest(e.target.value)}
              >
                <option value="">Executive Furniture</option>
                <option value="Workstations">Workstations</option>
                <option value="Seating">Seating</option>
                <option value="Conference">Conference</option>
                <option value="All">All Products</option>
              </select>
            </div>
            <div className="wholeSale-form-eighthRow">
              <label htmlFor="message" className="messageHeader">
                MESSAGE<span>*</span>
              </label>
              <input
                id="message"
                type="text"
                value={message}
                onChange={(e) => setYourMessage(e.target.value)}
              />
            </div>
          </form>
          <div className="wholeSaleDisclaimer">
            <p>
              Our wholesale specialists will review your inquiry and reach out
              within 24 hours to discuss <br /> pricing tiers, minimum orders,
              and partnership benefits.
            </p>
          </div>
          <button
            onClick={wholeSaleEmailHandleClick}
            disabled={send}
            className="sendWholeSaleButton"
          >
            {send ? "isSending..." : "Request Wholesale Info"}
          </button>
        </div>
        <div className="advertisingImageContainer">
          <img src={TurnstoneLDesk} className="image" />

          <h1 className="containerName">Turnstone L Desk</h1>
          <p>$1299.00</p>
          <img src={DomesDesk} className="image" />
          <h1 className="containerName">Domes Desk</h1>
          <p>$799.00</p>
          <img src={LDesk} className="image" />
          <h1 className="containerName">L Desk</h1>
          <p>$1599.00</p>
          <img src={NuipenDesk} className="image" />
          <h1 className="containerName">Nuipen Desk</h1>
          <p>$1699.00</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
