import React from "react";
import StarRating from "../../../../common/StarRating";
import { useStyles } from "./styles";

export default function Comment({ data }) {
  const { name, date, text, rating } = data;
  const classes = useStyles();

  return (
    <div className={classes.comment}>
      <span>
        {name} - {date}
      </span>
      <StarRating num={rating} />
      <p>{text}</p>
    </div>
  );
}
