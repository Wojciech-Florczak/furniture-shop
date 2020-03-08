import React from "react";
import { Modal, Button } from "react-bootstrap";
import productsList from "../../db.json";
import ProductSmall from "../common/ProductSmall"
export default function ShoppingCart(props) {

  return (
    <>
      <Modal
        {...props}
        dialogClassName="mr-5 mt-5"
        aria-labelledby="shopping-cart-modal"
        animation={false}
      >
        <Modal.Body>
          <ProductSmall data={productsList[0]} />
          <ProductSmall data={productsList[5]} />
          <ProductSmall data={productsList[7]} />
          <h4>Total to pay: $420</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button>View Cart</Button>
          <Button>Checkout</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}