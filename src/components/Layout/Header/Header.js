import React from "react";
import "./Header.css";
import logo from "../../../assets/icons/add_cart.svg";

const Header = () => {
  return (
    <nav>
      <div className="upNav">
        <div className="logo">
          <span className="logoTitle">LKart</span>
          <img src={logo} className="logoImg" alt="logo" />
        </div>
        <div className="searchBar">
          <input type="text" placeholder="Enter product name,category" />
          <button className="search">Search</button>
        </div>
        <div className="addToCart">
          <span className="cartNum">
            Cart <sup>0</sup>
          </span>
          <button className="btnAdd">
            <img src={logo} alt="addtocart" />
          </button>
        </div>
      </div>
      <div className="downNav">
        <button className="downBtn first">Home</button>
        <button className="downBtn">Category 1</button>
        <button className="downBtn">Category 2</button>
        <button className="downBtn">Category 3</button>
        <button className="downBtn">Category 4</button>
      </div>
    </nav>
  );
};

export default Header;
