import React from "react";
import { Container } from "react-bootstrap";
import { useStyles } from "./styles";

export default function Information() {
  const classes = useStyles();

  return (
    <Container className="mt-3 mb-3">
      <h2 className={classes.title}>Future is in furniture</h2>
      <p className={classes.text}>
        Ea enim mollit dolor reprehenderit duis pariatur eu ex id excepteur.
        Tempor ad fugiat deserunt ex sint elit anim aliquip voluptate proident
        anim cupidatat. Ex anim dolor eu ullamco laboris do ad in. Nostrud velit
        nisi dolore irure minim aute pariatur consequat consectetur officia elit
        aliqua.
      </p>
    </Container>
  );
}
