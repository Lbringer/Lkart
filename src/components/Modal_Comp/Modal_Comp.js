import React from "react";
import ReactDom from "react-dom";
import Modal from "react-bootstrap/Modal";

const Modal_Comp = ({ show, handleClose, children }) => {
  return ReactDom.createPortal(
    <Modal show={show} onHide={handleClose}>
      {children}
    </Modal>,
    document.getElementById("modal-root")
  );
};

export default Modal_Comp;
