import React from "react";
import PropTypes from 'prop-types';
import { Badge } from "react-bootstrap";
import { useStyles } from "./styles";

export default function BadgeCounter({ num = 1 }) {
  const classes = useStyles();

  return (
    <Badge className={classes.badge} variant="danger">
      {num > 0 && num}
    </Badge>
  );
}

BadgeCounter.propTypes = {
  num: PropTypes.number
}