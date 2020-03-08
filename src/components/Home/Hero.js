import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import HeroSlider from "./HeroSlider";

const sliderConfig = [
  {
    id: 1,
    img:
      "https://res.cloudinary.com/voytekcloud/image/upload/v1581209792/E-comm/slider-1_daythj.jpg",
    text: "Best Furniture in Poland"
  },
  {
    id: 2,
    img:
      "https://res.cloudinary.com/voytekcloud/image/upload/v1581209792/E-comm/slider-2_pkgydk.jpg",
    text: "Any type of furniture you can imagine"
  },
  {
    id: 3,
    img:
      "https://res.cloudinary.com/voytekcloud/image/upload/v1581209792/E-comm/slider-3_nectwu.jpg",
    text: "Ex deserunt ea sit aute ullamco velit commodo aliqua sunt aliquip id adipisicing."
  }
];

export default function Hero() {
  return (
    <Jumbotron>
      <div className="position-relative">
        <HeroSlider config={sliderConfig}/>
      </div>
    </Jumbotron>
  );
}
