import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import InputGroup from "react-bootstrap/InputGroup";
import search from "../../assets/search.svg";
import Cart from "../Cart/Cart";
import "./Nav.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <Navbar className="bg-dark text-white" fixed="top">
        <Container>
          <div className="con">
            <Navbar.Brand href="#home" className="text-white fw-medium">
              i-Kart
            </Navbar.Brand>
            <NavDropdown
              title="Categories"
              id="basic-nav-dropdown"
              className="ms-3 fw-medium"
            >
              <NavDropdown.Item href="#action/3.1">Home</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Category 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Category 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Category 3</NavDropdown.Item>
            </NavDropdown>
          </div>

          <InputGroup className="w-50">
            <Form.Control
              placeholder="Enter product name,category"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="warning" id="button-addon2">
              <img src={search} alt="search" />
            </Button>
          </InputGroup>
          <Cart isOpen={isOpen} handleClick={handleClick} />
        </Container>
      </Navbar>
    </>
  );
};

export default Nav;
