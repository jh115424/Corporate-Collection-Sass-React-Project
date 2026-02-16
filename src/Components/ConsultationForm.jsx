import React from "react";
import "./consultation.css";
import { useState } from "react";
import SubHeader from "./SubHeader";
import { useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router";

export default function Consultation() {
  // Form Field //
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [meetingFormat, setMeetingFormat] = useState("");
  const [budget, setBudget] = useState("");
  const [projectNotes, setProjectNotes] = useState("");
  const [send, isSending] = useState("");

  // Calender Var //

  const [currentMonth, setCurrentMonth] = useState("");
  const [currentYear, setCurrentYear] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  return (
    <>
      <SubHeader />
      <div className="consultationContainer">
        <header>SCHEDULE A CONSULTATION</header>
        <div className="headerLine"></div>
        <p className="calenderIntro">
          Select a date and time that works best for you
        </p>
      </div>
    </>
  );
}

// /STEP 1 - CREATE THE FILE:
// Create ConsultationForm.jsx in your Components folder. Import React, useState, useEffect, emailjs, your CSS file, and Link from react-router at the top
// STEP 2 - DECLARE YOUR FORM FIELD useState VARIABLES:
// You need one useState for each of these: firstName, lastName, email, phone, companyName, jobTitle, meetingFormat, budget, projectNotes, and one for send/isSending
// STEP 3 - DECLARE YOUR CALENDAR useState VARIABLES:
// You need one useState for the current month and year being displayed, one for selectedDate, and one for selectedTime
// STEP 4 - BUILD YOUR RETURN - OUTER STRUCTURE:
// Your return needs a main page wrapper div, a header section with your title and gold line, then a flex container div that holds both the calendar side and the form side next to each other
// STEP 5 - BUILD YOUR RETURN - CALENDAR SIDE:
// Inside the calendar side div you need: a header div with the two arrow buttons and the month/year display, the day labels row (SU MO TU WE TH FR SA), the calendar grid div with HARDCODED numbers 1 through 31, the time slots section with all 8 time options, and the selected date/time display at the bottom
// STEP 6 - BUILD YOUR RETURN - FORM SIDE:
// Inside the form side div you need: a section title, all your input fields for personal info, a divider, a section title for consultation details, the meetingFormat select, budget select, projectNotes textarea, and the submit button
// STEP 7 - CREATE YOUR CSS FILE:
// Create ConsultationForm.css and style everything - the flex layout, calendar header, calendar grid days, today highlighting, selected day highlighting, past day graying out, time slots, form fields, and submit button until it looks exactly how you want it
// STEP 8 - BUILD THE changeMonth FUNCTION:
// This function takes a direction (forward or back) and updates the current month useState when the arrows are clicked
// STEP 9 - BUILD THE buildCalendar FUNCTION:
// This function figures out what day of the week the month starts on, how many days are in the month, which days are in the past, and which day is today. This is what REPLACES your hardcoded numbers from step 5
// STEP 10 - BUILD THE selectDay FUNCTION:
// This function takes the day that was clicked and saves it as a readable date string into your selectedDate useState
// STEP 11 - BUILD THE selectTime FUNCTION:
// This function takes the time slot that was clicked and saves it into your selectedTime useState
// STEP 12 - BUILD THE updateDisplay FUNCTION:
// This function checks if selectedDate and selectedTime have values and builds the confirmation message the user sees at the bottom of the calendar
// STEP 13 - ADD useEffect:
// Add a useEffect that calls buildCalendar every time the current month useState changes so the calendar re-renders when you navigate months
// STEP 14 - BUILD THE emailHandleClick FUNCTION:
// Inside this function you need setIsSending(true), your dataParams object with ALL form fields including selectedDate and selectedTime, the emailjs.send with .then showing success alert, .catch for errors, and .finally setting isSending back to false. After the alert, reset all your useState variables back to empty strings including selectedDate and selectedTime
// STEP 15 - ADD THE ROUTE AND LINK:
// Go to main.jsx and add the route for ConsultationForm. Then go to wherever you want the link and add a Link tag pointing to that route
