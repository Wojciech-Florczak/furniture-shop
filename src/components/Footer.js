import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";

const tagsList = [
  "wood",
  "chair",
  "stone",
  "sofa",
  "glass",
  "lightning",
  "roof",
  "lamp"
];

export default function Footer() {
  return (
    <Container>
      <Row>
        <Col xl={3}>
          <h2>Logo</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit nisi velit iure adipisci consequatur laborum dolorum
            accusamus magni voluptates a facere rem deleniti nam, ipsa dolorem
            cumque deserunt aspernatur commodi!
          </p>
        </Col>
        <Col xl={3}>
          <h5>Twitter</h5>
          <ul>
            <li>
              <span>icon</span>
              <p className="text-right">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <span>icon</span>
              <p className="text-right">
                Tempore aspernatur veniam autem quidem exercitationem commodi.
              </p>
            </li>
          </ul>
        </Col>
        <Col xl={3}>
          <h5>Product Tags</h5>
          {tagsList.map(tag => {
            return (
              <Badge
                variant="secondary"
                pill
                className="m-1 text-capitalize"
                style={{ fontSize: "1rem" }}
              >
                {tag}
              </Badge>
            );
          })}
        </Col>
        <Col xl={3}>
          <h5>Information</h5>
          <ul>
            <li>
              <p className="text-right">
                90 Cambridge Road, YO6 9SN
                <br />
                Normanby
              </p>
              <span>icon</span>
            </li>
            <li>
              <p className="text-right">+1(555) 489 23 11</p>
              <span>icon</span>
            </li>
            <li>
              <p className="text-right">info@furnitu.re</p>
              <span>icon</span>
            </li>
          </ul>
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );
}
