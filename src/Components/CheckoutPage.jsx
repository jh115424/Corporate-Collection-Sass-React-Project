import React from "react";
import { Link } from "react-router";
// import { useState } from "react";
import { Route } from "react-router";
import ProductsPage from "./ProductsPage";
import SubHeader from "./SubHeader";


export default function CheckoutPage ({cart, setCart}) {



    return(
    <>
    <SubHeader />
    <p>pizza</p>
    </>
    )
}



// STEP 1 - CREATE THE FILE:
// Make a new file called CheckoutPage.jsx in your Components folder
// STEP 2 - RECEIVE THE CART DATA:
// At the top of CheckoutPage function, accept cart and setCart as props (same way CartPage does)
// STEP 3 - CREATE THE PAGE LAYOUT:
// The page needs three main sections - order summary at top, customer information form in middle, place order button at bottom
// STEP 4 - ORDER SUMMARY SECTION:
// Show a list of all items in the cart with their names, quantities, and individual prices. At the bottom of this section, show the total price
// STEP 5 - CUSTOMER INFORMATION FORM:
// Create input fields for customer to fill out: full name, email address, phone number, shipping address (street, city, state, zip code), and payment method selection (like credit card, PayPal)
// STEP 6 - CREATE STATE FOR FORM INPUTS:
// For each input field (name, email, phone, etc), create a useState that holds what the customer types
// STEP 7 - CONNECT INPUTS TO STATE:
// Each input field needs an onChange that updates its state when the customer types
// STEP 8 - CREATE PLACE ORDER FUNCTION:
// Make a function that runs when customer clicks "Place Order" button. This function should validate that all required fields are filled out, then show a confirmation message
// STEP 9 - ADD SUBHEADER:
// Import and add SubHeader at the top so it matches your other pages
// STEP 10 - HANDLE EMPTY CART:
// Add a check - if cart is empty, show a message saying "Your cart is empty" with a button to go back to products page
// THAT'S ALL 10 STEPS FOR A COMPLETE CHECKOUT PAGE!