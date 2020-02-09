import React from "react";
import Media from "react-bootstrap/Media";

export default function ProductSmall({data}) {
  const {image, price, name} = data
  return (
    <Media>
      <img
        width={64}
        height={64}
        className="mr-3"
        src={image}
        alt="Placeholder"
      />
      <Media.Body>
        <h5>{name}</h5>
        <span>{price} $</span>
      </Media.Body>
    </Media>
  );
}
