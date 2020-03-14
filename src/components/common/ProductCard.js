import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { createUseStyles } from "react-jss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { DispatchContext } from "../../contexts/cart.context.js";

const useStyles = createUseStyles({
  title: {
    fontSize: "1rem",
    color: "gray",
    textAlign: "center",
    marginBottom: 0
  },
  price: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    textAlign: "center"
  },
  buttonsWrapper: {
    opacity: 1,
    width: "100%",
    height: 40,
    display: "flex",
    alignItems: "center",
    backgroundColor: "#EAEBED",
    borderTop: "1px solid #DFDFDF",
    "& div": {
      display: "flex",
      flex: "1 auto",
      padding: ".25rem",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      "&:not(:last-child)": {
        borderRight: "1px solid #DFDFDF"
      },
      "& span": {
        fontSize: "0.75rem"
      }
    },
    fontSize: "1rem"
  }
});

export default function ProductCard({ data }) {
  const dispatch = useContext(DispatchContext);

  const { name, price, image, id } = data;
  const classes = useStyles();
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
              dispatch({ type: "ADD", payload: { id, name, image, price, qty: 1 } })
            }
          >
            Add to Cart
          </span>
        </button>
        <div>
          <FontAwesomeIcon icon="heart" />
        </div>
        <div>
          <Link to={`/product/${id}`}>
            <FontAwesomeIcon icon="external-link-alt" />
          </Link>
        </div>
      </div>
    </Card>
  );
}
