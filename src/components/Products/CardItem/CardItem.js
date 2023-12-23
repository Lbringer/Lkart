import React from "react";
import AddToCartIcon from "../../../assets/icons/add_cart.svg";
import "./CardItem.css";
const CardItem = ({ data }) => {
  return (
    <div className="con">
      <img
        className="placeholder"
        src={`/assets/${data.thumbnail}`}
        alt="image_placeholder"
      />
      <div className="row details">
        <span className="price">₹{data.discountedPrice}</span>
        <small>
          <strike>₹{data.price}</strike>
        </small>
      </div>
      <div className="row title">
        <h3>{data.title}</h3>
      </div>
      <button className="row cartBtn">
        <span>Add to cart</span>
        <img src={AddToCartIcon} alt="add to cart" />
      </button>
    </div>
  );
};

export default CardItem;
