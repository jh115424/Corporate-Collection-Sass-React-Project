import React from "react";
import "./categoryNavigation.css";
import { Link } from "react-router";

import { Route } from "react-router-dom";

export default function CategoryNavigation() {
  const furnitureCategory = [
    { name: "Desks" },
    { name: "Chairs" },
    { name: "Lighting" },
  ];

  return (
    <>
      <div className="underline"></div>
      <div className="productPageButtonContainer">
        {furnitureCategory.map((category, index) => (
          <Link
            key={index}
            to={"/products/" + category.name}
            className="categoryLink"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </>
  );
}
