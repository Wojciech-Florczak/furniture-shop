import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ProductCard from "./ProductCard";
import productsList from "../db.json";

const slicedList = productsList.slice(0, 12);

export default function Featured() {
  return (
    <Container>
      <h2>Featured</h2>
      <Row>
        {slicedList.map(product => {
          return (
            <Col sm={6} md={3} xl={2} key={product.id} className="mb-2">
              <ProductCard data={product} />
            </Col>
          );
        })}
      </Row>
      <Row></Row>
    </Container>
  );
}
