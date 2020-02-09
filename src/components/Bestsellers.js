import React from "react";
import ProductCard from "./ProductCard";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import productsList from "../db.json";

const slicedList = productsList.slice(4, 8);

export default function Bestsellers() {
  return (
    <Container>
      <h2 className="text-center">Bestsellers</h2>
      <Row>
        {slicedList.map(product => {
          return (
            <Col md={6} lg={3} key={product.name}>
              <ProductCard data={product}/>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
