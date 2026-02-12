import { useState } from "react";
import "./wholesaleInquiriesForm.css";
import SubHeader from "./SubHeader";
import emailjs from "@emailjs/browser";
import React from "react";

export default function wholesaleInquiriesForm() {
  const [companyName, setCompanyName] = useState("");
  const [contactName, setContactName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [businessYears, setBusinessYears] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [volumeOrder, stVolumeOrder] = useState("");
  const [primaryInterest, setPrimaryInterest] = useState("");
  const [message, setYourMessage] = useState("");

  const wholeSaleEmailHandleClick = (e) => {};
  return (
    <>
      <SubHeader />
      <div className="wholeSaleInquiriesContainer">
        <h1 className="title">
          Wholesale Program
          <p>Premium Partnership Program</p>
        </h1>
      </div>
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
        </form>
      </div>
    </>
  );
}

name.name;
