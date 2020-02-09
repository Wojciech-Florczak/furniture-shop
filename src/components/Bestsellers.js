import React from "react";
import ProductCard from "./ProductCard";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

export default function Bestsellers() {
  return (
    <Container>
      <h2 className="text-center">Bestsellers</h2>
      <Row>
        <Col md={6} lg={3}>
          <ProductCard />
        </Col>
        <Col md={6} lg={3}>
          <ProductCard />
        </Col>
        <Col md={6} lg={3}>
          <ProductCard />
        </Col>
        <Col md={6} lg={3}>
          <ProductCard />
        </Col>
      </Row>
    </Container>
  );
}
