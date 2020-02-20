import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import productsList from "../db.json";
import ProductCard from "../components/ProductCard.js";
import ProductSmall from "../components/ProductSmall";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  list: {
    listStyle: "none",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 0
  },
  listItem: {
    flexBasis: "33%",
    padding: 10
  },
  priceFilter: {
    "& input": {
      maxWidth: 60,
      marginRight: 10
    }
  }
});

export default function ProductAll() {
  const classes = useStyles();
  const productsToDisplay = productsList.slice(0,9)
  return (
    <Container>
      <Row>
        <Col md={3}>
          <div>
            <h3>Filter</h3>
            <div className={classes.priceFilter}>
              <h4>Filter by Price</h4>
              <input type="text" placeholder="from" />
              <input type="text" placeholder="to" />
            </div>
            <div>
              <h4>Categories</h4>
              <ListGroup>
                <ListGroup.Item>Drawers</ListGroup.Item>
                <ListGroup.Item>Tables</ListGroup.Item>
                <ListGroup.Item>Chairs</ListGroup.Item>
                <ListGroup.Item>Sofas</ListGroup.Item>
                <ListGroup.Item>Lamps</ListGroup.Item>
                <ListGroup.Item>Chests</ListGroup.Item>
              </ListGroup>
            </div>
            <div>
              <h4>Hot Sale</h4>
              <ProductSmall data={productsList[0]} />
              <ProductSmall data={productsList[1]} />
              <ProductSmall data={productsList[2]} />
            </div>
          </div>
        </Col>
        <Col md={9}>
          <h3>Showing {productsToDisplay.length} of {productsList.length} products</h3>
          <ul className={classes.list}>
            {productsToDisplay.map(product => {
              return (
                <li key={product.id} className={classes.listItem}>
                  <ProductCard data={product} />{" "}
                </li>
              );
            })}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
