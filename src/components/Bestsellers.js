import React from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import Container from "react-bootstrap/Container";
import productsList from "../db.json";
import { createUseStyles } from "react-jss";

const bestsellersList = productsList.slice(13, 19);

const useStyles = createUseStyles({
  arrow: {
    width: "auto",
    height: "auto",
    "&:before": {
      color: "rgba(0,0,0,0.3)",
      fontSize: "2rem",
      margin: "-20px"
    }
  }
});

export default function Bestsellers() {
  const classes = useStyles();

  function CustomArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={`${className} ${classes.arrow}`} onClick={onClick} />
    );
  }
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 3,
    speed: 500,
    slidesPerRow: 1,
    nextArrow: <CustomArrow />,
    prevArrow: <CustomArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
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
