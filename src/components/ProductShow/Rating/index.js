import React, { useState } from "react";
import StarRating from "../../common/StarRating";
import Comments from "./Comments";

export default function Rating() {
  const [rating, setRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const getTotalRating = arr => {
    const totalNum = arr.length;
    const summedUp = arr.reduce((acc, currVal) => {
      return parseFloat((acc + currVal.rating).toFixed(10));
    }, 0);
    setTotalReviews(totalNum);
    setRating(Number((summedUp / totalNum).toFixed(1)));
  };
  return (
    <div>
      <h4>Rating</h4>
      <StarRating num={rating} />
      <h5>{totalReviews} reviews</h5>
      <Comments getTotalRating={getTotalRating} />
    </div>
  );
}
