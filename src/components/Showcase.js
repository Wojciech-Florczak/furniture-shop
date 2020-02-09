import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

export default function Showcase() {
  return (
    <Container>
      <Row >
        <Col md={6} lg={4}>
          <Image src="https://via.placeholder.com/250" fluid className="p-1 w-100 h-100" />
        </Col>
        <Col md={{span: 12, order: 1}} lg={{span: 4, order: 0}}>
          <Row >
            <Col md={6} lg={12}>
              <Image src="https://via.placeholder.com/250x150" fluid className="p-1 w-100 h-100"/>
            </Col>
            <Col md={6} lg={12}>
              <Image src="https://via.placeholder.com/250x150" fluid className="p-1 w-100 h-100" />
            </Col>
          </Row>
        </Col>
        <Col md={{span: 6}} lg={{span: 4}}>
          <Image src="https://via.placeholder.com/250" fluid className="p-1 w-100 h-100" />
        </Col>
      </Row>
    </Container>
  );
}
