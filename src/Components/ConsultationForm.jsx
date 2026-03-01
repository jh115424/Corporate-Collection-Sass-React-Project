/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./consultation.css";
import { useState } from "react";
import SubHeader from "./SubHeader";
import { useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router";
import { addMonths, subMonths } from "date-fns";
export default function Consultation() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState("");
  const [description, setDescription] = useState("");
  const [send, setIsSending] = useState("");

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [calendarData, setCalendarData] = useState([]);

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const buildCalendar = () => {
    let yearNumber = currentMonth.getFullYear();
    let monthNumber = currentMonth.getMonth();

    const newDate = new Date(yearNumber, monthNumber, 1);
    const startingDay = newDate.getDay();
    const daysInMonth = new Date(yearNumber, monthNumber + 1, 0).getDate();
    const todaysDate = new Date();

    let calendarElements = [];

    for (let i = 0; i < startingDay; i++) {
      calendarElements.push(null);
    }

    for (let j = 1; j <= daysInMonth; j++) {
      const specificDay = new Date(yearNumber, monthNumber, j);

      if (specificDay < todaysDate) {
        calendarElements.push({ day: j, type: "past" });
      }

      if (specificDay.toDateString() === todaysDate.toDateString()) {
        calendarElements.push({ day: j, type: "today" });
      }

      if (specificDay > todaysDate) {
        calendarElements.push({ day: j, type: "future" });
      }
    }

    setCalendarData(calendarElements);
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const selectTime = (time) => {
    setSelectedTime(time);
  };

  const sendConsultationHandleClick = (e) => {
    e.preventDefault();
    setIsSending(true);

    const serviceId = "service_8fxa1nn";
    const templateId = "template_r3ycwdo";
    const publicKey = "74BZsOVATORg5niqu";

    const bookConsultationDataParams = {
      email: email,
      phone: phone,
      budget: budget,
    };

    emailjs
      .send(serviceId, templateId, bookConsultationDataParams, publicKey)
      .then((response) => {
        console.log(
          "Booking complete!  You will receive a confirmation email 24 hours prior to appointment",
          response.status,
          response.text,
        );
        alert(
          "Booking complete!  You will receive a confirmation email 24 hours prior to appointment",
        );
        setEmail("");
        setPhone("");
        setBudget("");
        setDescription("");
      })
      .catch((error) => {
        console.error("Booking email failed to send", error);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  useEffect(() => {
    buildCalendar();
  }, [currentMonth]);

  return (
    <>
      <SubHeader />
      <div className="consultationContainer">
        <header>SCHEDULE A CONSULTATION</header>
        <div className="headerLine"></div>
        <p className="calenderIntro">
          Select a date and time that works best for you
        </p>
        <div className="actualCalenderContainer">
          <div onClick={prevMonth} className="monthHeaderLeftArrow">
            ‹
          </div>
          <div className="calenderMonth">
            <p>{currentMonth.toLocaleDateString()}</p>
          </div>
          <div onClick={nextMonth} className="monthHeaderRightArrow">
            ›
          </div>
        </div>
        <div className="daysOfTheWeek">
          <p className="days">SU</p>
          <p className="days">MO</p>
          <p className="days">TU</p>
          <p className="days">WE</p>
          <p className="days">TH</p>
          <p className="days">FR</p>
          <p className="days">SA</p>
        </div>

        <div className="datesOfTheWeek">
          {calendarData.map((item, index) => (
            <div
              key={index}
              className={`dates ${selectedDate === item.day ? "selected" : ""}`}
              onClick={() => setSelectedDate(item.day)}
            >
              {item === null ? "" : item.day}
            </div>
          ))}
        </div>

        <div className="timeLine"></div>
        <div className="timePick">Select a time:</div>
        <div className="timeSelection">
          <p
            onClick={() => selectTime("9:00AM")}
            className={`times ${selectedTime === "9:00AM" ? "selected" : ""}`}
          >
            9:00AM
          </p>
          <p
            onClick={() => selectTime("1:00PM")}
            className={`times ${selectedTime === "1:00PM" ? "selected" : ""}`}
          >
            1:00PM
          </p>
          <p
            onClick={() => selectTime("3:00PM")}
            className={`times ${selectedTime === "3:00PM" ? "selected" : ""}`}
          >
            3:00PM
          </p>
          <p
            onClick={() => selectTime("8:00AM")}
            className={`times ${selectedTime === "8:00AM" ? "selected" : ""}`}
          >
            9:00AM
          </p>
          <p
            onClick={() => selectTime("4:00PM")}
            className={`times ${selectedTime === "4:00PM" ? "selected" : ""}`}
          >
            4:00PM
          </p>
          <p
            onClick={() => selectTime("11:00AM")}
            className={`times ${selectedTime === "11:00AM" ? "selected" : ""}`}
          >
            11:00AM
          </p>
          <p
            onClick={() => selectTime("2:00PM")}
            className={`times ${selectedTime === "2:00PM" ? "selected" : ""}`}
          >
            2:00PM
          </p>
          <p
            onClick={() => selectTime("12:00PM")}
            className={`times ${selectedTime === "12:00PM" ? "selected" : ""}`}
          >
            12:00PM
          </p>
        </div>

        <div className="dateThatIsSelected">
          <p>
            Selected:{" "}
            <span>
              {monthNames[currentMonth.getMonth()]} {selectedDate},{" "}
              {currentMonth.getFullYear()} <span>{selectedTime}</span>{" "}
            </span>
          </p>
        </div>
        <div className="timeLine"></div>
        <div className="infoForm">
          <p className="formTitle">CONSULTATION DETAILS</p>
          <form
            id="info-form"
            className="yourInfoForm"
            onSubmit={sendConsultationHandleClick}
          >
            <label htmlFor="email">
              EMAIL<span>*</span>
            </label>
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="phone">
              PHONE<span>*</span>
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ""))}
              required
            />
            <label htmlFor="budget">
              PROJECT BUDGET<span>*</span>
            </label>
            <select
              id="budget"
              type="text"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              required
            >
              <option value="">Select Range</option>
              <option value="5-20k">$5k - $20k</option>
              <option value="20-50k">$20k - $50k</option>
              <option value="50-100k">$50k - $100k</option>
              <option value="100k+">$100k+</option>
            </select>
            <label htmlFor="description" className="projectDescription">
              TELL US ABOUT YOUR PROJECT<span>*</span>
            </label>
            <input
              id="description"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </form>
        </div>
        <button
          type="submit"
          form="info-form"
          disabled={send}
          className="bookConsultation"
        >
          {send ? "Sending email..." : "Book My Consultation"}
        </button>
      </div>
    </>
  );
}
