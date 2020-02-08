import React from "react";
import ProductCard from "./ProductCard";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";

export default function Bestsellers() {
  return (
    <Container>
      <h2 className="text-center">Bestsellers</h2>
      <CardDeck>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </CardDeck>
    </Container>
  );
}
