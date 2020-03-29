import React from "react";
import { Badge } from "react-bootstrap";
import { useStyles } from "./styles";

export default function Tags({ tags }) {
  const classes = useStyles();
  return (
    <>
      {tags.map(tag => {
        return (
          <Badge key={tag} variant="secondary" pill className={classes.tag}>
            {tag}
          </Badge>
        );
      })}
    </>
  );
}
