import React, { useState } from "react";
import Modal_Comp from "../Modal_Comp/Modal_Comp";
import Modal from "react-bootstrap/Modal";
import CartCard from "../CartCard/CartCard";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { CLEAR_CART } from "../../redux/Cart/CartSlice";
import axios from "axios";

const Cart = ({ isOpen, handleClick }) => {
  const [orderId, setOrderId] = useState("");
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmt = useSelector((state) => state.cart.totalAmt);
  const dispatch = useDispatch();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.data);
  const order_api = async (cart, user) => {
    try {
      const res = await axios.post(
        `https://l-kart-feba7-default-rtdb.firebaseio.com/orders/${user.localId}.json?auth=${user.idToken}`,
        {
          ...cart,
        }
      );
      setOrderId(res.data.name);
      setOrderPlaced(true);
    } catch (error) {
      if (!user?.idToken) {
        alert("Login first");
      } else {
        alert(error.message);
      }
    }
  };
  const handleOrderPlaced = () => {
    handleClick();
    order_api(cart, user);
    dispatch(CLEAR_CART());
  };
  const handleOrderPlacedClose = () => {
    setOrderPlaced(false);
  };
  return (
    <>
      <Button className="btn btn-warning wid fw-medium" onClick={handleClick}>
        Cart <sup>{cartItems.length}</sup>
      </Button>
      {/* eslint-disable-next-line */}
      <Modal_Comp show={isOpen} handleClose={handleClick}>
        <Modal.Header closeButton>
          <Modal.Title>Checkout Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartItems.length <= 0 ? (
            <h6 className="text-muted">Please add something in your cart</h6>
          ) : (
            <>
              {cartItems.map((item) => {
                return <CartCard item={item} key={item.id} />;
              })}
            </>
          )}
        </Modal.Body>
        {cartItems.length > 0 && (
          <Modal.Footer className=" d-flex justify-content-between">
            <h6>
              Total Amount :{" "}
              <span className="fw-bold text-success">₹ {totalAmt}</span>
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

      {/* eslint-disable-next-line */}
      <Modal_Comp show={orderPlaced} handleClose={handleOrderPlacedClose}>
        <Modal.Header closeButton>
          <Modal.Title className="fs-5">
            Order placed with ID:{orderId}
          </Modal.Title>
        </Modal.Header>
      </Modal_Comp>
    </>
  );
};

export default Cart;
