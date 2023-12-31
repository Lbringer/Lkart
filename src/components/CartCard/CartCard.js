import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CartCard = ({ item, handleEventInfo }) => {
  return (
    <>
      <Card style={{ width: "16rem" }} className="m-1 d-flex flex-row w-100">
        <Container>
          <Row>
            <Col>
              <Card.Img variant="top" src={`/assets/${item.thumbnail}`} />
            </Col>
            <Col>
              {" "}
              <Card.Body className=" d-flex flex-column w-100">
                <Card.Title className="w-100">{item.title}</Card.Title>
                <Card.Text>
                  <span className="fw-medium">₹ {item.discountedPrice}</span>
                  <strike className="fw-medium ms-2">₹ {item.price}</strike>
                </Card.Text>
                <Card.Text className="d-flex justify-content-between align-items-center">
                  <Button
                    variant="warning"
                    onClick={() => handleEventInfo(item.id, -1)}
                  >
                    -
                  </Button>
                  <span className="fw-medium">{item.quantity}</span>
                  <Button
                    variant="warning"
                    onClick={() => handleEventInfo(item.id, 1)}
                  >
                    +
                  </Button>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Container>
      </Card>
    </>
  );
};

export default CartCard;
