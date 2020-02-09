import React from "react";
import Media from "react-bootstrap/Media";

export default function ProductSmall() {
  return (
    <Media>
      <img
        width={64}
        height={64}
        className="mr-3"
        src="https://via.placeholder.com/64"
        alt="Placeholder"
      />
      <Media.Body>
        <h5>Default Chair</h5>
        <span>999 $</span>
      </Media.Body>
    </Media>
  );
}
