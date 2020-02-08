import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ProductSmall from "./ProductSmall";

export default function SmallProducts() {
  return (
    <Container>
      <Row>
        <Col lg={3}>
          <h3>Hot Sale</h3>
          <ProductSmall />
          <ProductSmall />
          <ProductSmall />
        </Col>
        <Col lg={3}>
          <h3>New Collection</h3>
          <ProductSmall />
          <ProductSmall />
          <ProductSmall />
        </Col>
        <Col lg={3}>
          <h3>Top Rated</h3>
          <ProductSmall />
          <ProductSmall />
          <ProductSmall />
        </Col>
        <Col lg={3}>
          <h3>Unavailable soon</h3>
          <ProductSmall />
          <ProductSmall />
          <ProductSmall />
        </Col>
      </Row>
    </Container>
  );
}
