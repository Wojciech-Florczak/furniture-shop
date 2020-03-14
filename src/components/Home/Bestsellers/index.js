import React from "react";
import Slider from "react-slick";
import ProductCard from "../../common/ProductCard/";
import Container from "react-bootstrap/Container";
import { useStyles } from "./styles";
import { sliderSettings } from "./config";
import productsList from "../../../db.json";

//TODO make it more dynamic
const bestsellersList = productsList.slice(13, 19);

export default function Bestsellers() {
  const classes = useStyles();
  function CustomArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={`${className} ${classes.arrow}`} onClick={onClick} />
    );
  }
  const settings = {
    ...sliderSettings,
    nextArrow: <CustomArrow />,
    prevArrow: <CustomArrow />
  };

  return (
    <Container>
      <h2 className="text-center">Bestsellers</h2>
      <Slider {...settings}>
        {bestsellersList.map(product => {
          return (
            <div key={product.id} className="p-1">
              <ProductCard data={product} />
            </div>
          );
        })}
      </Slider>
    </Container>
  );
}
