import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

export default function Showcase() {
  return (
    <Container>
      <Row >
        <Col>
          <Image src="https://via.placeholder.com/250" fluid className="p-1" style={{height: "100%"}} />
        </Col>
        <Col>
          <Row>
            <Col xl={12}>
              <Image src="https://via.placeholder.com/250x150" fluid className="p-1" style={{width: "100%"}} />
            </Col>
            <Col xl={12}>
              <Image src="https://via.placeholder.com/250x150" fluid className="p-1" style={{width: "100%"}}  />
            </Col>
          </Row>
        </Col>
        <Col>
          <Image src="https://via.placeholder.com/250" fluid className="p-1" style={{height: "100%"}} />
        </Col>
      </Row>
    </Container>
  );
}
