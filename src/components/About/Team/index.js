import React from "react";
import { Row, Col, Figure } from "react-bootstrap";
import { people } from "./config";

export default function Team() {
  return (
    <div>
      <h3>Our Team</h3>
      <Row>
        {people.map(person => {
          return (
            <Col key={person.name} md={3} className="d-flex justify-content-center">
              <Figure>
                <Figure.Image src={person.photo} />
                <Figure.Caption>{person.name}</Figure.Caption>
              </Figure>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
