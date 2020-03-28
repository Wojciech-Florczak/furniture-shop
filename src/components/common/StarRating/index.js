import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStyles } from "./styles";

export default function StarRating({ num }) {
  const classes = useStyles();

  const numToArr = num => {
    return num
      .toString()
      .split(".")
      .map(num => Number(num));
  };

  const generateRating = () => {
    let rating = numToArr(num);
    let filled = [...Array(rating[0])];
    let half = rating[1] >= 5;

    return (
      <>
        {filled.map((star, i) => {
          return (
            <FontAwesomeIcon
              key={i}
              icon="star"
              size="lg"
              className={classes.filled}
            />
          );
        })}
        {half && (
          <FontAwesomeIcon
            icon="star-half"
            size="lg"
            className={classes.filled}
          />
        )}
      </>
    );
  };

  const rating = generateRating(num);

  return <div>{rating}</div>;
}

StarRating.propTypes = {
  num: PropTypes.number.isRequired
};
