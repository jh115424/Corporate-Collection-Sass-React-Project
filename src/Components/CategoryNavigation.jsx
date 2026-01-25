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

// COMPLETE DETAILED STEPS FOR PRODUCT CATEGORIES COMPONENT:
// STEP 1: Import Link from react-router-dom at the very top of the file
// STEP 2: Create categories array at the top of the component function before the return - this array holds 3 objects, one for each category (Desks, Chairs, Lighting), with each object containing properties like the category name
// STEP 3: Write your return statement with a parent container div
// STEP 4: Inside that container, use map on the categories array - this loops through each category object
// STEP 5: For each category in the map, create a Link component that wraps around a div or card element - the Link's "to" prop should navigate to the Products page
// STEP 6: Inside each Link, display the category information - show the category name from the object
// STEP 7: Give each mapped item a unique key prop - use the index from map

// CATEGORYNAV COMPONENT (GOES ON HOME PAGE):

// Categories array with Desks, Chairs, Lighting
// Map function to loop through them
// Link components for navigation
// Displays category buttons/cards
// The buttons ARE NOT a separate component - they're CREATED INSIDE CategoryNav by the map function
// Purpose: Let users choose a category and navigate to Products page

// PRODUCTSPAGE COMPONENT (IS ITS OWN PAGE/ROUTE):

// The actual furniture items array with images, names, prices
// Map function to display all the furniture
// Product cards showing image, description, price
// Purpose: Display the actual furniture products

// CATEGORYNAV = NAVIGATION ON HOME (CREATES THE BUTTONS)
// PRODUCTSPAGE = ACTUAL PRODUCTS DISPLAYED
// YOU DON'T NEED A SEPARATE BUTTONS COMPONENT - CATEGORYNAV MAKES THE BUTTONS
