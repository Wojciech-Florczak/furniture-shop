import React from "react";
import PropTypes from 'prop-types';
import { useStyles } from "./styles";

export default function DiscountBadge(props) {
  const classes = useStyles(props);
  return (
    <div className={classes.wrapper}>
      <span>-{props.value}%</span>
    </div>
  );
}

DiscountBadge.propTypes = {
  value: PropTypes.number,
  color: PropTypes.string,
  background: PropTypes.string
}

DiscountBadge.defaultProps = {
  value: 50,
  color: "white",
  background: "orange"
};
