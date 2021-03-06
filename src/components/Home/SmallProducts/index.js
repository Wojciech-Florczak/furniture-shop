import React from "react";
import ProductSmall from "../../common/ProductSmall/";
import { Col, Row, Container } from "react-bootstrap";
import shuffleArray from "../../../helpers/shuffle";
import productsList from "../../../db.json";

export default function SmallProducts() {
  //TODO make it more dynamic
  const newProducts = shuffleArray(productsList);
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
