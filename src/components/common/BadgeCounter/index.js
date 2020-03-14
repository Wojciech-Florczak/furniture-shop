import React from "react";
import { Badge } from "react-bootstrap";
import { useStyles } from "./styles";

export default function BadgeCounter({ num = 0 }) {
  const classes = useStyles();

  return (
    <Badge className={classes.badge} variant="danger">
      {num > 0 && num}
    </Badge>
  );
}
