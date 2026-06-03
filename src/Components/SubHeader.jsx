import React from "react";
import "./subHeader.css";
import LandingStatement from "./LandingStatement";
import { Link } from "react-router";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function SubHeader() {
  const navigate = useNavigate();
  const { logout, currentUser } = useAuth();
  return (
    <>
      <div className="dropDownContainer">
        <Link to="/home">
          <div className="companyName">
            <p className="ccLogo">CC</p>
            <p className="brandText">Corporate Collection</p>
          </div>
        </Link>
        <div className="productsTopMenuLeft">
          <div className="gettingStartedAndDemoSection">
            {currentUser && (
              <button
                onClick={() => {
                  logout();
                  navigate("/");
                }}
                className="logOutButton"
              >
                Log out
              </button>
            )}
            <Link to="/wholesale">
              <button className="wholesaleButton">Wholesale Inquiries</button>
            </Link>
            <Link to="/consultation">
              <button className="schedulingButton">
                Schedule a Consultation{" "}
              </button>
            </Link>
          </div>
          <Link to="/products">
            <button className="productsButton">Products</button>
          </Link>
        </div>
      </div>
    </>
  );
}