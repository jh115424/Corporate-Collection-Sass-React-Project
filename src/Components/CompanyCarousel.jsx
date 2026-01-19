import React from "react";
import "./companyCarousel.css";
import { useState } from "react";
import { useEffect } from "react";



const company = [
  {
    logo: "https://cdn.brandfetch.io/id7L59h6d0/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
  },
  {
    name: "McKinsey & Company",
    logo: "https://cdn.brandfetch.io/iddTc-lesG/w/400/h/400/theme/dark/icon.png?c=1dxbfHSJFAPEGdCLU4o5B",
  },
  {
    logo: "https://cdn.brandfetch.io/idVE84WdIN/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
  },
  {
    logo: "https://cdn.brandfetch.io/idnrCPuv87/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
  },
  {
    logo: "https://cdn.brandfetch.io/id6O2oGzv-/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
  },
  {
    logo: "https://cdn.brandfetch.io/idV265JNAE/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
  },
  {
    logo: "https://cdn.brandfetch.io/idrAEeTLeo/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
  },
  {
    logo: "https://cdn.brandfetch.io/idTYuC91_A/w/820/h/118/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B",
  },
];

export default function CompanyCarousel() {
  const [position, setPosition] = useState(0);

//   useEffect(() => {
//     const nameInterval = setInterval(() => {
//       setPosition((prevPosition) => {
//         const newPosition = prevPosition - 2;

//         if (newPosition < -1500) {
//           return 0;
//         } else {
//           return newPosition;
//         }
//       });
//     }, 25);
//     return () => clearInterval(nameInterval);
//   }, []);

  return (
    <>
      <div
        className="companiesThatAreClients"
        style={{ transform: `translateX(${position}px)` }}
      >
        {company.map((companyName, index) => (
          <div key={index}>
            <img src={companyName.logo} className="nameAndLogo" />
            {companyName.name && <span>{companyName.name}</span>}
          </div>
        ))}
        {company.map((companyName, index) => (
          <div key={index + company.length}>
            {" "}
            <img src={companyName.logo} className="nameAndLogo" />
            {companyName.name && <span>{companyName.name}</span>}{" "}
          </div>
        ))}
      </div>
   
    </>
  );
}
