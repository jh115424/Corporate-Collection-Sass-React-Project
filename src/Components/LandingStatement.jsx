import React from "react";
import "./landingStatement.css";
import { useState } from "react";
import { useEffect } from "react";


import SubHeader from "./SubHeader";

const words = [
  "distinguished spaces ",
  "executive offices",
  "iconic workspaces",
  "prestigious environments",
];

export default function TopHeader() {
  const [endWord, setEndWord] = useState("distinguished spaces");

  useEffect(() => {
    let index = 0;
    const wordInterval = setInterval(() => {
      index = (index + 1) % words.length;
      setEndWord(words[index]);
    }, 4000);

    return () => clearInterval(wordInterval);
  }, []);

  return (
    <>
      <div className="mainStatement">
        The luxury furniture and accessory platform for <br />
        <span key={endWord} className="rotatingStatementEnd">
          {endWord}
        </span>
      </div>

      <p className="buttonsStatement">
        Transform your office into the competitive edge your executive vision
        demands
      </p>

    </>
  );
}
