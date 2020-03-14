import React from "react";
import Slider from "react-slick";
import ProductCard from "../../common/ProductCard/";
import Container from "react-bootstrap/Container";
import { useStyles } from "./styles";
import { sliderSettings } from "./config";
import productsList from "../../../db.json";

//TODO make it more dynamic
const featuredList = productsList.slice(0, 12);

export default function Featured() {
  const classes = useStyles();
  function CustomArrow(props) {
    const { className, onClick, style } = props;
    return (
      <div
        className={`${className} ${classes.arrow}`}
        style={{ ...style }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    ...sliderSettings,
    nextArrow: <CustomArrow />,
    prevArrow: <CustomArrow />
  };

  return (
    <Container>
      <h2>Featured</h2>
      <Slider {...settings}>
        {featuredList.map(product => {
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
