import React from "react";
import Slider from "react-slick";
import Image from "react-bootstrap/Image";

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1
};

export default function SimpleSlider() {
  return (
    <Slider {...settings}>
      <Image src="https://res.cloudinary.com/voytekcloud/image/upload/v1581209792/E-comm/slider-1_daythj.jpg" />
      <Image src="https://res.cloudinary.com/voytekcloud/image/upload/v1581209792/E-comm/slider-2_pkgydk.jpg" />
      <Image src="https://res.cloudinary.com/voytekcloud/image/upload/v1581209792/E-comm/slider-3_nectwu.jpg" />
    </Slider>
  );
}
