import React from "react";
import Slider from "./SimpleSlider/";
import Jumbotron from "react-bootstrap/Jumbotron";
import { sliderConfig } from "./config";

export default function Hero() {
  return (
    <Jumbotron>
      <div className="position-relative">
        <Slider config={sliderConfig} />
      </div>
    </Jumbotron>
  );
}
