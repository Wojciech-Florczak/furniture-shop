import React from "react";
import { Container, Col, Row } from "react-bootstrap";

export default function Data() {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <span>Address</span>
          <p>
            90 Cambridge Road, YO6 9SN
            <br />
            Normanby
          </p>
        </Col>
        <Col md={4}>
          <span>Phone</span>
          <a href="tel:+1(555) 489 23 11">+1(555) 489 23 11</a>
        </Col>
        <Col md={4}>
          <span>E-mail</span>
          <a href="mailto:info@furnitu.re">info@furnitu.re</a>
        </Col>
      </Row>
    </Container>
  );
}
