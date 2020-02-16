import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
// import Button from "react-bootstrap/Button";
import HeroSlider from "./HeroSlider";
// import { createUseStyles } from "react-jss";

// const useStyles = createUseStyles({

// });

export default function Hero() {
  // const classes = useStyles();
  return (
    <Jumbotron>
      <div className="position-relative">
        <HeroSlider />
      </div>
    </Jumbotron>
  );
}
