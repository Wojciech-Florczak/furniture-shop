import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import HeroSlider from "./HeroSlider";

export default function Hero() {
  return (
    <Jumbotron>
      <HeroSlider/>
    </Jumbotron>
  );
}
