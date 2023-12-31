import React from "react";
import Spinner from "react-bootstrap/Spinner";
import ReactDOM from "react-dom";

const Loader = () => {
  return ReactDOM.createPortal(
    <Spinner animation="grow" variant="warning" />,
    document.getElementById("loader-root")
  );
};

export default Loader;
