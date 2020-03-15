import React from "react";
import PropTypes from "prop-types";
import Media from "react-bootstrap/Media";

export default function ProductSmall({ data }) {
  const { image, price, name, qty } = data;
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
        <span>${price}</span>
        {qty && <span>QTY: qty</span>}
      </Media.Body>
    </Media>
  );
}

ProductSmall.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  qty: PropTypes.number
};
