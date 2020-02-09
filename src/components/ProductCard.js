import React from "react";
import Card from "react-bootstrap/Card";
import chair from "../images/Armchair.H03.2k.png";

export default function ProductCard() {
  return (
    <Card>
      <Card.Img variant="top" src={chair} />
      <Card.Body>
        <Card.Title className="text-center">Card title</Card.Title>
        <Card.Text className="text-center">800 $</Card.Text>
      </Card.Body>
    </Card>
  );
}
