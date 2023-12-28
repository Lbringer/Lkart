import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";

const CardListItem = ({ item }) => {
  const [counter, setCounter] = useState(0);

  const handleMinus = () => {
    if (counter <= 0) {
      return;
    }
    setCounter(counter - 1);
  };
  return (
    <>
      <Card style={{ width: "16rem" }} className="m-1">
        <Card.Img variant="top" src={`/assets/${item.thumbnail}`} />
        <hr />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            <span className="fw-medium">₹ {item.discountedPrice}</span>
            <strike className="fw-medium ms-2">₹ {item.price}</strike>
          </Card.Text>
          <Card.Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,{" "}
          </Card.Text>

          {counter < 1 ? (
            <Button
              variant="warning"
              className="w-100 fw-medium"
              onClick={() => setCounter(counter + 1)}
            >
              Add to Cart
            </Button>
          ) : (
            <Card.Text className="d-flex justify-content-between align-items-center">
              <Button variant="warning" onClick={handleMinus}>
                -
              </Button>
              <span className="fw-medium">{counter}</span>
              <Button variant="warning" onClick={() => setCounter(counter + 1)}>
                +
              </Button>
            </Card.Text>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default CardListItem;
