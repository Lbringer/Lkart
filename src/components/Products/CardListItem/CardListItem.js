import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import ModalComp from "../../Modal_Comp/Modal_Comp";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { ADD_ITEM, REMOVE_ITEM } from "../../../redux/Cart/CartSlice";
const CardListItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  //item from cart
  const cartItem = useSelector((state) => {
    return state.cart.items.find((it) => it.id === item.id);
  });
  const dispatch = useDispatch();

  const handleMinus = (e) => {
    e.stopPropagation();
    // handleRemove(item.id);
    dispatch(REMOVE_ITEM(item.id));
  };
  const handlePlus = (e) => {
    e.stopPropagation();
    // handleAdd(item.id);
    dispatch(ADD_ITEM(item));
  };

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <Card
        style={{ width: "16rem", height: "30rem" }}
        className="m-1"
        onClick={handleClick}
      >
        <Card.Img variant="top" src={`/assets/${item.thumbnail}`} />
        <hr />
        <Card.Body className=" d-flex flex-column justify-content-between">
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            <span className="fw-medium">₹ {item.discountedPrice}</span>
            <strike className="fw-medium ms-2">₹ {item.price}</strike>
          </Card.Text>

          {!cartItem || cartItem?.quantity < 1 ? (
            <Button
              variant="warning"
              className="w-100 fw-medium"
              onClick={handlePlus}
            >
              Add to Cart
            </Button>
          ) : (
            <Card.Text className="d-flex justify-content-between align-items-center">
              <Button variant="warning" onClick={handleMinus}>
                -
              </Button>
              <span className="fw-medium">{cartItem.quantity}</span>
              <Button variant="warning" onClick={handlePlus}>
                +
              </Button>
            </Card.Text>
          )}
        </Card.Body>
      </Card>
      <ModalComp show={isOpen} handleClose={handleClick}>
        <Modal.Header closeButton>
          <Modal.Title>{item.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{item.description}</Modal.Body>
        <Modal.Footer className=" d-flex justify-content-between">
          {!cartItem || cartItem?.quantity < 1 ? (
            <Button
              variant="warning"
              className="w-100 fw-medium"
              onClick={handlePlus}
            >
              Add to Cart
            </Button>
          ) : (
            <>
              <Button variant="warning" onClick={handleMinus}>
                -
              </Button>
              <span className="fw-medium">{cartItem.quantity}</span>
              <Button variant="warning" onClick={handlePlus}>
                +
              </Button>
            </>
          )}
        </Modal.Footer>
      </ModalComp>
    </>
  );
};

export default CardListItem;
