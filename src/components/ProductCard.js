import React from "react";
import Card from "react-bootstrap/Card";
import { createUseStyles } from "react-jss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  const { name, price, image } = data;
  const classes = useStyles();
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={image} />
      <Card.Body className="p-1 d-flex justify-content-between flex-column">
        <Card.Title className={classes.title}>{name}</Card.Title>
        <Card.Text className={classes.price}>{price} $</Card.Text>
      </Card.Body>
      <div className={classes.buttonsWrapper}>
        <div>
          <FontAwesomeIcon icon="shopping-cart" className="mr-1" />
          <span>Add to Cart</span>
        </div>
        <div>
          <FontAwesomeIcon icon="heart" />
        </div>
        <div>
          <a href="#product">
            <FontAwesomeIcon icon="external-link-alt" />
          </a>
        </div>
      </div>
    </Card>
  );
}
