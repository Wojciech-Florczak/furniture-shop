import React from "react";
import productsList from "../db.json";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ProductShow({ match }) {
  const product = productsList.find(
    product => parseInt(product.id) === parseInt(match.params.id)
  );
  const { name, image, description, price } = product;
  return (
    <Container>
      <Row>
        <Col sm={6}>
          <Image src={image} />
        </Col>
        <Col sm={6}>
          <h2>{name}</h2>
          <p>{description}</p>
          <h5>${price}</h5>
        </Col>
      </Row>
    </Container>
  );
}
