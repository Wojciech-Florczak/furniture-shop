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
      <Row>
        <Col sm={6} md={3} xl={2}><ProductCard /></Col>
        <Col sm={6} md={3} xl={2}><ProductCard /></Col>
        <Col sm={6} md={3} xl={2}><ProductCard /></Col>
        <Col sm={6} md={3} xl={2}><ProductCard /></Col>
        <Col sm={6} md={3} xl={2}><ProductCard /></Col>
        <Col sm={6} md={3} xl={2}><ProductCard /></Col>
        <Col sm={6} md={3} xl={2}><ProductCard /></Col>
        <Col sm={6} md={3} xl={2}><ProductCard /></Col>
        <Col sm={6} md={3} xl={2}><ProductCard /></Col>
        <Col sm={6} md={3} xl={2}><ProductCard /></Col>
        <Col sm={6} md={3} xl={2}><ProductCard /></Col>
        <Col sm={6} md={3} xl={2}><ProductCard /></Col>
        <Col sm={6} md={3} xl={2}><ProductCard /></Col>
        <Col sm={6} md={3} xl={2}><ProductCard /></Col>
      </Row>
      <Row></Row>
    </Container>
  );
}
