import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import "./AuthForm.css";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import { signUp, login } from "../../redux/User/Userslice";
import { useDispatch, useSelector } from "react-redux";
const AuthForm = () => {
  const loader = useSelector((state) => state.user.loading);
  const fetched = useSelector((state) => state.user.fetched);

  const dispatch = useDispatch();
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const location = useLocation();
  const navigate = useNavigate();

  const handleInput = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
    if (location.pathname !== "/login") {
      dispatch(signUp(details));
    } else {
      dispatch(login(details));
    }
  };
  useEffect(() => {
    if (fetched) {
      navigate("/");
    }
    // eslint-disable-next-line
  }, [fetched]);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <Card style={{ width: "30vw", height: "60vh" }}>
          <Card.Header>
            <Nav variant="tabs">
              <Nav.Item>
                <Nav.Link
                  active={location.pathname === "/login" ? true : false}
                  className="authLink"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  active={location.pathname === "/login" ? false : true}
                  className="authLink"
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  Signup
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Form
              className="d-flex flex-column justify-content-evenly h-100"
              onSubmit={handleSubmit}
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-medium">Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={details.email}
                  onChange={handleInput}
                  name="email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="fw-medium">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={details.password}
                  onChange={handleInput}
                  name="password"
                />
              </Form.Group>
              <Button
                variant="warning"
                className="w-100 fw-medium"
                type="submit"
              >
                {location.pathname === "/login" ? "Login" : "Signup"}
              </Button>
            </Form>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default AuthForm;
