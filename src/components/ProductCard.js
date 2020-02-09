import React from "react";
import Card from "react-bootstrap/Card";

export default function ProductCard({ data }) {
  const { name, price, image } = data;
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className="text-center">{name}</Card.Title>
        <Card.Text className="text-center">{price} $</Card.Text>
      </Card.Body>
    </Card>
  );
}
