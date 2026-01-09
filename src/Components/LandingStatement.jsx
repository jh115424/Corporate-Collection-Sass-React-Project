import React from "react";
import "./landingStatement.css";
import { useState } from "react";
import { useEffect } from "react";

export default function TopHeader() {
  const [endWord, setEndWord] = useState("");

  const words = ["distinguished spaces ", "executive offices", "iconic workspaces", "prestigious environments"]

  return (
    <>
      <div className="mainStatement">
        <p>The luxury furniture and accessory platform for</p>
        <div className="rotatingStatementEnd"></div>
      </div>
    </>
  );
}

// Option 1:
// "The luxury furniture platform for [rotating]"

// Rotating phrases: distinguished spaces | executive offices | iconic workspaces | prestigious environments

// STEPS TO CREATE ROTATING TEXT:
// Step 1: Set up the structure

// Create the static text part
// Create a special container for the rotating text
// Put placeholder text in that container initially

// Step 2: Store your rotating phrases

// Keep a list of all the phrases you want to rotate through
// Know which phrase is currently showing

// Step 3: Set up the rotation logic

// Set a timer (like every 3-4 seconds)
// When timer hits, swap to the next phrase in your list
// When you reach the last phrase, loop back to the first one

// Step 4: Style it (CSS)

// Add fade in/out effects when text changes
// Make transitions smooth
// Style the container so text changes don't cause layout shifts

// Step 5: Start it automatically

// When the component loads, start the rotation automatically
// Keep it running until the user leaves the page
