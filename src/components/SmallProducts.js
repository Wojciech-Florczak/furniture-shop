import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ProductSmall from "./ProductSmall";
import productsList from "../db.json";
import shuffleArray from "../helpers/shuffle";

export default function SmallProducts() {
  const newProducts = shuffleArray(productsList)
  return (
    <Container>
      <Row>
        <Col sm={6} lg={3}>
          <h3>Hot Sale</h3>
          <ProductSmall data={newProducts[0]} />
          <ProductSmall data={newProducts[1]} />
          <ProductSmall data={newProducts[2]} />
        </Col>
        <Col sm={6} lg={3}>
          <h3>New Collection</h3>
          <ProductSmall data={newProducts[3]} />
          <ProductSmall data={newProducts[4]} />
          <ProductSmall data={newProducts[5]} />
        </Col>
        <Col sm={6} lg={3}>
          <h3>Top Rated</h3>
          <ProductSmall data={newProducts[6]} />
          <ProductSmall data={newProducts[7]} />
          <ProductSmall data={newProducts[8]} />
        </Col>
        <Col sm={6} lg={3}>
          <h3>Unavailable soon</h3>
          <ProductSmall data={newProducts[9]} />
          <ProductSmall data={newProducts[10]} />
          <ProductSmall data={newProducts[11]} />
        </Col>
      </Row>
    </Container>
  );
}
