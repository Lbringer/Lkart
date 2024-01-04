import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import search from "../../assets/search.svg";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { createSearchParams, useNavigate } from "react-router-dom";

const SearchBox = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate({
      search: createSearchParams({
        item: `${input}`,
      }).toString(),
    });
  };
  return (
    <>
      <Form className="w-50" onSubmit={handleSubmit}>
        <InputGroup>
          <Form.Control
            placeholder="Enter product name,category"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button variant="warning" id="button-addon2" type="submit">
            <img src={search} alt="search" />
          </Button>
        </InputGroup>
      </Form>
    </>
  );
};

export default SearchBox;
