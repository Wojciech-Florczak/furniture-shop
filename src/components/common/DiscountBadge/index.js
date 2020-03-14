import React from "react";
import { useStyles } from "./styles";

export default function DiscountBadge(props) {
  const classes = useStyles(props);
  return (
    <div className={classes.wrapper}>
      <span>-{props.value}%</span>
    </div>
  );
}

DiscountBadge.defaultProps = {
  value: 50,
  color: "white",
  background: "orange"
};
