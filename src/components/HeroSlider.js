import React from "react";
import Slider from "react-slick";
import Image from "react-bootstrap/Image";
import { createUseStyles } from "react-jss";

const settings = {
  dots: true,
  infinite: true,
  // autoplay: true,
  autoplaySpeed: 2000,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1
};

const useStyles = createUseStyles({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.4)"
  },
  intro: {
    position: "absolute",
    top: "40%",
    left: "50%",
    color: "white",
    zIndex: 1,
    transform: "translate(-50%, 50%)",
    "& h2": {
      fontSize: "3rem"
    }
  }
});

export default function SimpleSlider() {
  const classes = useStyles();
  return (
    <Slider {...settings}>
      <div>
        <Image src="https://res.cloudinary.com/voytekcloud/image/upload/v1581209792/E-comm/slider-1_daythj.jpg" />
        <div className={classes.intro}>
          <h2>Best furnitures in Poland</h2>
        </div>
        <div className={classes.overlay}></div>
      </div>
      <div>
        <Image src="https://res.cloudinary.com/voytekcloud/image/upload/v1581209792/E-comm/slider-2_pkgydk.jpg" />
      </div>
      <div>
        <Image src="https://res.cloudinary.com/voytekcloud/image/upload/v1581209792/E-comm/slider-3_nectwu.jpg" />
      </div>
    </Slider>
  );
}
