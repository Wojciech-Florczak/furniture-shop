import React, { useContext } from "react";
import { CartContext } from "../../../contexts/cart.context";
import PropTypes from "prop-types";
import ProductSmall from "../../common/ProductSmall/";
import BadgeCounter from "../../common/BadgeCounter";
import { Modal, Button } from "react-bootstrap";

export default function ShoppingCart(props) {
  const cart = useContext(CartContext);

  const totalToPay = cart.products
    .map(product => product.price * product.qty)
    .reduce((acc, currVal) => {
      return parseFloat((acc + currVal).toFixed(10));
    }, 0);

  const countProducts = cart.products.reduce((acc, currVal) => {
    return acc + currVal.qty;
  }, 0);

  return (
    <>
      <BadgeCounter num={countProducts} />
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
          <h4>Total to pay: ${totalToPay.toFixed(2)}</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button>View Cart</Button>
          <Button>Checkout</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

ShoppingCart.propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.func
};
