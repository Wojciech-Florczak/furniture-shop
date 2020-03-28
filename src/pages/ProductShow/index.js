import React from "react";
import PropTypes from "prop-types";
import ImageCarousel from "../../components/ProductShow/ImageCarousel";
import ProductInfo from "../../components/ProductShow/ProductInfo";
import Rating from "../../components/ProductShow/Rating";
import { Row, Col, Container } from "react-bootstrap";
import productsList from "../../db.json";

export default function ProductShow({ match }) {
  const product = productsList.find(
    product => parseInt(product.id) === parseInt(match.params.id)
  );

  return (
    <Container>
      <Row className="align-items">
        <Col sm={12} md={6}>
          <ImageCarousel image={product.image} />
        </Col>
        <Col sm={12} md={6}>
          <ProductInfo product={product} />
        </Col>
        <Col sm={12}>
          <Rating />
        </Col>
      </Row>
    </Container>
  );
}

ProductShow.propTypes = {
  match: PropTypes.object
};
