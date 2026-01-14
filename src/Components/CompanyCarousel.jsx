import React from "react";
import "./companyCarousel,css";
import { useState } from "react";
import { useEffect } from "react";


const companyNames = [
 "Apex Corporation",
 "Meridian Industries",
 "Vertex Solutions",
 "Summit Enterprises",
 "Pinnacle Group",
 "Horizon Capital",
 "Titan Holdings",
 "Nexus Global",
 "Elevation Partners",
 "Vanguard Systems",
 "Sterling Ventures"

]



export default function CompanyCarousel () {

    const [startName, setStartName] = useState("Apex Corporation")

    return (

        <>
        
          <div className="companiesThatAreClients">


          </div>


        </>
    )
}








// HERE ARE 11 MADE-UP CORPORATE COMPANY NAMES:

// Apex Corporation
// Meridian Industries
// Vertex Solutions
// Summit Enterprises
// Pinnacle Group
// Horizon Capital
// Titan Holdings
// Nexus Global
// Elevation Partners
// Vanguard Systems
// Sterling Ventures