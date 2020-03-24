import React from "react";
import { Badge } from "react-bootstrap";

export default function ProductInfo({ product }) {
  const { name, description, price, tags, quantity, category } = product;

  return (
    <div className="d-flex flex-column justify-content-around h-100">
      <div>
        <h2>{name}</h2>
        <h4>{category}</h4>
        <p>{description}</p>
      </div>
      <div>
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
        <div></div>
        <h5>${price}</h5>
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
    </div>
  );
}
