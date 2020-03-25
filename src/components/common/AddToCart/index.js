import React from "react";
import { Button, Modal } from "react-bootstrap";
import ProductSmall from "../ProductSmall";

export default function AddToCart({ handleClose, show, data }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Added {data.name} to shopping cart.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProductSmall data={data} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Continue browsing
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Proceed to checkout
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
