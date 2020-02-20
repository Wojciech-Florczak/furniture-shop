import React from "react";
import Slider from "react-slick";
import Image from "react-bootstrap/Image";
import { createUseStyles } from "react-jss";

const settings = {
  infinite: true,
  arrows: false,
  fade: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 1400,
  slidesToShow: 1,
  swipe: false,
  pauseOnHover: false,
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
  },
  imageWrapper: {
    width: "100%",
    height: "100%",
    position: "relative"
  },
  contentWrapper: {
    height: 600
  },
  image: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
});

export default function SimpleSlider(props) {
  const classes = useStyles();
  return (
    <Slider {...settings}>
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
