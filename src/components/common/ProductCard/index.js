import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DispatchContext } from "../../../contexts/cart.context.js";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStyles } from "./styles";

export default function ProductCard({ data }) {
  const dispatch = useContext(DispatchContext);
  const classes = useStyles();
  const { name, price, image, id } = data;

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={image} />
      <Card.Body className="p-1 d-flex justify-content-between flex-column">
        <Card.Title className={classes.title}>{name}</Card.Title>
        <Card.Text className={classes.price}>${price}</Card.Text>
      </Card.Body>
      <div className={classes.buttonsWrapper}>
        <button>
          <FontAwesomeIcon icon="shopping-cart" className="mr-1" />
          <span
            onClick={() =>
              dispatch({
                type: "ADD",
                payload: { id, name, image, price, qty: 1 }
              })
            }
          >
            Add to Cart
          </span>
        </button>
        <div>
          <FontAwesomeIcon icon="heart" />
        </div>
        <div>
          <Link to={`/products/${id}`}>
            <FontAwesomeIcon icon="external-link-alt" />
          </Link>
        </div>
      </div>
    </Card>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  id: PropTypes.number
};