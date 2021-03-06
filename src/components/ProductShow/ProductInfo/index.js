import React, { useContext, useState, useEffect } from "react";
import { DispatchContext, CartContext } from "../../../contexts/cart.context";
import AddToCart from "../../common/AddToCart";
import { Form, InputGroup, Button } from "react-bootstrap";
import { useStyles } from "./styles";
import StarRating from "../../common/StarRating";
import Tags from "../../common/Tags";

export default function ProductInfo({ product, rating }) {
  const dispatch = useContext(DispatchContext);
  const cart = useContext(CartContext);
  const [newQuantity, setNewQuantity] = useState(1);
  const [maxQuantity, setMaxQuantity] = useState(0);
  const [show, setShow] = useState(false);
  const classes = useStyles();
  const {
    name,
    description,
    price,
    tags,
    image,
    quantity,
    category,
    id
  } = product;

  const productInCart = cart.products.find(product => product.id === id);

  // Set maximum quantity based on how many items are in stock
  useEffect(() => {
    productInCart
      ? setMaxQuantity(quantity - productInCart.qty)
      : setMaxQuantity(quantity);
  }, [productInCart, maxQuantity, quantity, cart]);

  const handleSubmit = () => {
    if (newQuantity > maxQuantity) {
      setNewQuantity(maxQuantity);
      return;
    }
    if (newQuantity < 0) {
      setNewQuantity(1);
      return;
    }
    if (productInCart?.qty === quantity) return;

    if (productInCart) {
      dispatch({
        type: "UPDATE_QTY",
        payload: { qty: parseInt(newQuantity), id }
      });
      setShow(true);
    } else {
      dispatch({
        type: "ADD",
        payload: { id, name, image, price, qty: parseInt(newQuantity) }
      });
      setShow(true);
    }
  };

  return (
    <div className="d-flex flex-column justify-content-around h-100">
      <div>
        <h2 className={classes.name}>{name}</h2>
        <h4 className={classes.category}>{category}</h4>
        <div className={classes.rating}>
          <StarRating num={rating[0] || 0} />
          <span>
            (
            <a href="#reviews" className={classes.reviewsLink}>
              {rating[1]} reviews
            </a>
            )
          </span>
        </div>
        <p>{description}</p>
      </div>
      <div>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>QTY</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            type="number"
            value={newQuantity}
            min={1}
            max={maxQuantity}
            onChange={e => setNewQuantity(e.target.value)}
            className={classes.input}
          />
          <InputGroup.Append>
            <Button onClick={handleSubmit} variant="outline-danger">
              Add to cart
            </Button>
          </InputGroup.Append>
        </InputGroup>
        <hr />
        <div></div>
        <h5>${price}</h5>
        <h5>In stock: {quantity}</h5>
        <h4>Tags</h4>
        <Tags tags={tags} />
      </div>
      <AddToCart
        show={show}
        handleClose={() => setShow(false)}
        data={product}
      />
    </div>
  );
}
