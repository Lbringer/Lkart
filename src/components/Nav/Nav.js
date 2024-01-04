import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

import NavDropdown from "react-bootstrap/NavDropdown";
import person_fill from "../../assets/person-fill.svg";
import Cart from "../Cart/Cart";
import "./Nav.css";
import { NavLink, useNavigate } from "react-router-dom";
import SearchBox from "../SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "../../redux/User/Userslice";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  const handleLogin = () => {
    navigate("/login");
  };
  const handleLogout = () => {
    dispatch(LOGOUT());
  };
  const fetched = useSelector((state) => state.user.fetched);
  return (
    <>
      <Navbar className="bg-dark text-white" fixed="top">
        <Container>
          <div className="con">
            <Navbar.Brand
              className="text-white fw-medium"
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
            >
              i-Kart
            </Navbar.Brand>
            <NavDropdown
              title="Categories"
              id="basic-nav-dropdown"
              className="ms-3 fw-medium "
            >
              <NavLink exact="true" to="/" className="link">
                Home
              </NavLink>
              <NavDropdown.Divider />
              <NavLink exact="true" to="category-1" className="link">
                Category-1
              </NavLink>
              <NavLink exact="true" to="category-2" className="link">
                Category-2
              </NavLink>
              <NavLink exact="true" to="category-3" className="link">
                Category-3
              </NavLink>
            </NavDropdown>
          </div>

          <SearchBox />

          <Cart isOpen={isOpen} handleClick={handleClick} />
          {!fetched ? (
            <Button
              variant="success"
              className="fw-medium"
              size="sm"
              onClick={handleLogin}
            >
              Login
            </Button>
          ) : (
            <Button
              variant="danger"
              className="fw-medium"
              size="sm"
              onClick={handleLogout}
            >
              Logout :{" "}
              <span>
                <img src={person_fill} alt="person_fill" />
              </span>
            </Button>
          )}
        </Container>
      </Navbar>
    </>
  );
};

export default Nav;
