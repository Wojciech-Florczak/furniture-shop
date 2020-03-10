import React, { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import productsList from "../../db.json";
import ProductSmall from "../common/ProductSmall";
import { CartContext, DispatchContext } from "../../contexts/cart.context.js";

export default function ShoppingCart(props) {
  const cart = useContext(CartContext);
  const dispatch = useContext(DispatchContext);

  const totalToPay = cart.products
    .map(product => product.price * product.qty)
    .reduce((acc, currVal) => {
      return acc + currVal;
    }, 0);

  console.log(cart);
  return (
    <>
      <Modal
        {...props}
        dialogClassName="mr-5 mt-5"
        aria-labelledby="shopping-cart-modal"
        animation={false}
      >
        <Modal.Body>
          {cart.products.map(product => {
            return <ProductSmall data={product} key={product.id} />;
          })}
          <h4>Total to pay: ${totalToPay}</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button>View Cart</Button>
          <Button>Checkout</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
