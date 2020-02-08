import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import chair from "../images/Armchair.H03.2k.png";
import ProductCard from "./ProductCard";

export default function Featured() {
  return (
    <Container>
      <h2>Featured</h2>
      <CardDeck>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </CardDeck>
      <CardDeck>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </CardDeck>
      {/* <Row>
        <Col xl={2}></Col>
        <Col xl={2}></Col>
        <Col xl={2}></Col>
        <Col xl={2}></Col>
        <Col xl={2}></Col>
      </Row>
      <Row></Row> */}
    </Container>
  );
}
