import React from "react";
import { ListGroup, Container } from "react-bootstrap";
import productsList from "../db.json";
import ProductSmall from "./ProductSmall.js";

export default function ProductAll() {
  return (
    <Container>
      <ListGroup>
        {productsList.map(product => {
          return (
            <ListGroup.Item key={product.id}>
              <ProductSmall data={product} />
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </Container>
  );
}
