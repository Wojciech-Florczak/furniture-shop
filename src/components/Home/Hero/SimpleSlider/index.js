import React from "react";
import Slider from "react-slick";
import Image from "react-bootstrap/Image";
import { useStyles } from "./styles";
import { sliderSettings } from "./config";

export default function SimpleSlider(props) {
  const classes = useStyles();
  return (
    <Slider {...sliderSettings}>
      {props.config.map(slide => {
        return (
          <div key={slide.id} className={classes.contentWrapper}>
            <div className={classes.imageWrapper}>
              <Image src={slide.img} className={classes.image} />
            </div>
            <div className={classes.intro}>
              <h2>{slide.text}</h2>
            </div>
            <div className={classes.overlay}></div>
          </div>
        );
      })}
    </Slider>
  );
}
