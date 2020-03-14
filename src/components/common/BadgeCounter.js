import React from "react";
import { Badge } from "react-bootstrap";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  badge: {
    borderRadius: "50%",
    position: "absolute",
    bottom: -2,
    right: -12
  }
});

export default function BadgeCounter({ num = 0 }) {
  const classes = useStyles(num);
  return (
    <Badge
      className={classes.badge}
      variant="danger"
    >
      {num > 0 && num}
    </Badge>
  );
}
