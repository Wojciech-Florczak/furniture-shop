import React from "react";
import productsList from "../db.json";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";

export default function ProductShow({ match }) {
  const product = productsList.find(
    product => parseInt(product.id) === parseInt(match.params.id)
  );
  console.log(product);
  const { name, image, description, price, tags, quantity, category } = product;
  return (
    <Container>
      <Row>
        <Col sm={6}>
          <Image src={image} />
        </Col>
        <Col sm={6}>
          <h2>{name}</h2>
          <h4>{category}</h4>
          <p>{description}</p>
          <h5>${price}</h5>
          <div>
            <span>QTY</span>
            <input
              type="number"
              name="quantity"
              id="product-quantity"
              min={1}
              max={quantity}
              placeholder={1}
            />
            <Badge variant="danger" pill>
              Add to cart
            </Badge>
          </div>
          <hr />
          <div>
            <h4>Tags</h4>
            {tags.map(tag => {
              return (
                <Badge
                  key={tag}
                  variant="secondary"
                  pill
                  className="m-1 text-capitalize"
                  style={{ fontSize: "1rem" }}
                >
                  {tag}
                </Badge>
              );
            })}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
