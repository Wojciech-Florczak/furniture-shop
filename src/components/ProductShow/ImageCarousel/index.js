import React, { useState } from "react";
import Slider from "react-slick";
import { Image } from "react-bootstrap";
import { useStyles } from "./styles";

export default function ImageCarousel({ image }) {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const classes = useStyles();
  const smallScreen = window.matchMedia("(max-width: 767.98px)").matches;

  function CustomArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={`${className} ${classes.arrow}`} onClick={onClick} />
    );
  }

  const createPlaceholders = num => {
    return Array(num).fill(
      <Image
        className={classes.image}
        src="https://via.placeholder.com/400"
        alt="placeholder"
      />
    );
  };
  const sliders = createPlaceholders(5);

  return (
    <div className="mb-5 mb-md-0">
      <Slider
        asNavFor={nav2}
        ref={slider => setNav1(slider)}
        dots={smallScreen ? true : false}
        arrows={smallScreen ? false : true}
        prevArrow={<CustomArrow />}
        nextArrow={<CustomArrow />}
      >
        <Image className={classes.image} src={image} alt="product" />
        {sliders.map((slide, i) => {
          return <React.Fragment key={i}>{slide}</React.Fragment>;
        })}
      </Slider>
      <Slider
        asNavFor={nav1}
        ref={slider => setNav2(slider)}
        slidesToShow={4}
        swipeToSlide={true}
        focusOnSelect={true}
        className="d-none d-md-block"
      >
        <Image className={classes.image} src={image} alt="product" />
        {sliders.map((slide, i) => {
          return <React.Fragment key={i}>{slide}</React.Fragment>;
        })}
      </Slider>
    </div>
  );
}
