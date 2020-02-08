import React from "react";
import Media from "react-bootstrap/Media";
import chair from "../images/Armchair.H03.2k.png";

export default function ProductSmall() {
  return (
    <Media>
      <img
        width={64}
        height={64}
        className="mr-3"
        src={chair}
        alt="Generic placeholder"
      />
      <Media.Body>
        <h5>Default Chair</h5>
        <span>999 $</span>
      </Media.Body>
    </Media>
  );
}
