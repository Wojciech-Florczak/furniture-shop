import React from "react";
import Slider from "react-slick";
import Container from "react-bootstrap/Container";
import ProductCard from "../common/ProductCard";
import productsList from "../../db.json";
import { createUseStyles } from "react-jss";

const featuredList = productsList.slice(0, 12);

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
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
    rows: 2,
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
