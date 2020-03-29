import React from "react";
import StarRating from "../../../../common/StarRating";
import { Col } from "react-bootstrap";
import { useStyles } from "./styles";

export default function Comment({ data }) {
  const { name, date, text, rating } = data;
  const classes = useStyles();

  return (
    <li className={classes.comment}>
      <Col md={3} className={classes.leftCol}>
        <div className={classes.leftColContent}>
          <span>
            {name} - {date}
          </span>
          <StarRating num={rating} />
        </div>
      </Col>
      <Col className={classes.rightCol}>
        <p>{text}</p>
      </Col>
    </li>
  );
}
