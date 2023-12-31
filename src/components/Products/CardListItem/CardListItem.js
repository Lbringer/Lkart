import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import ModalComp from "../../Modal_Comp/Modal_Comp";
import Modal from "react-bootstrap/Modal";

const CardListItem = ({ item }) => {
  const [counter, setCounter] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleMinus = (e) => {
    e.stopPropagation();
    if (counter <= 0) {
      return;
    }
    setCounter(counter - 1);
  };
  const handlePlus = (e) => {
    e.stopPropagation();
    setCounter(counter + 1);
  };

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <Card style={{ width: "16rem" }} className="m-1" onClick={handleClick}>
        <Card.Img variant="top" src={`/assets/${item.thumbnail}`} />
        <hr />
        <Card.Body className=" d-flex flex-column justify-content-between">
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            <span className="fw-medium">₹ {item.discountedPrice}</span>
            <strike className="fw-medium ms-2">₹ {item.price}</strike>
          </Card.Text>

          {counter < 1 ? (
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
              <span className="fw-medium">{counter}</span>
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
          {counter < 1 ? (
            <Button
              variant="warning"
              className="w-100 fw-medium"
              onClick={() => setCounter(counter + 1)}
            >
              Add to Cart
            </Button>
          ) : (
            <>
              <Button variant="warning" onClick={handleMinus}>
                -
              </Button>
              <span className="fw-medium">{counter}</span>
              <Button variant="warning" onClick={() => setCounter(counter + 1)}>
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
