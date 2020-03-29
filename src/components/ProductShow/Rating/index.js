import React, { useState, useEffect } from "react";
import StarRating from "../../common/StarRating";
import Comments from "./Comments";
import { useStyles } from "./styles";

export default function Rating({ setTotalRating }) {
  const [rating, setRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const classes = useStyles();

  const getTotalRating = arr => {
    const totalNum = arr.length;
    const summedUp = arr.reduce((acc, currVal) => {
      return parseFloat((acc + currVal.rating).toFixed(10));
    }, 0);
    setTotalReviews(totalNum);
    setRating(Number((summedUp / totalNum).toFixed(1)));
  };
  
  useEffect(() => {
    if (totalReviews > 0) {
      setTotalRating([rating, totalReviews]);
    }
  }, [rating, totalReviews, setTotalRating]);

  return (
    <div id="reviews">
      <h5 className={classes.title}>{totalReviews} reviews</h5>
      <Comments getTotalRating={getTotalRating} />
    </div>
  );
}
