import React, { useState } from "react";
import Modal_Comp from "../Modal_Comp/Modal_Comp";
import Modal from "react-bootstrap/Modal";
import CartCard from "../CartCard/CartCard";
import Button from "react-bootstrap/Button";

const Cart = ({
  isOpen,
  handleClick,
  numCartItems,
  cartItems,
  handleEventInfo,
}) => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const handleOrderPlaced = () => {
    handleClick();
    setOrderPlaced(true);
  };
  const handleOrderPlacedClose = () => {
    setOrderPlaced(false);
  };
  return (
    <>
      <Button className="btn btn-warning wid fw-medium" onClick={handleClick}>
        Cart <sup>{numCartItems}</sup>
      </Button>
      {/* eslint-disable-next-line */}
      <Modal_Comp show={isOpen} handleClose={handleClick}>
        <Modal.Header closeButton>
          <Modal.Title>Checkout Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {numCartItems <= 0 ? (
            <h6 className="text-muted">Please add something in your cart</h6>
          ) : (
            <>
              {cartItems.map((item) => {
                return (
                  <CartCard
                    item={item}
                    key={item.id}
                    handleEventInfo={handleEventInfo}
                  />
                );
              })}
            </>
          )}
        </Modal.Body>
        {numCartItems > 0 && (
          <Modal.Footer className=" d-flex justify-content-between">
            <h6>
              Total Amount :{" "}
              <span className="fw-bold text-success">
                ₹{" "}
                {cartItems.reduce((acc, cur) => {
                  return acc + cur.discountedPrice * cur.quantity;
                }, 0)}
              </span>
            </h6>
            <Button
              variant="warning"
              className="fw-medium"
              onClick={handleOrderPlaced}
            >
              Order Now
            </Button>
          </Modal.Footer>
        )}
      </Modal_Comp>
      <Modal_Comp show={orderPlaced} handleClose={handleOrderPlacedClose}>
        <Modal.Header closeButton>
          <Modal.Title>Order placed</Modal.Title>
        </Modal.Header>
      </Modal_Comp>
    </>
  );
};

export default Cart;
