import React from "react";
import DiscountBadge from "../../common/DiscountBadge";
import { Container, Col, Row, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import shuffleArray from "../../../helpers/shuffle";
import { useStyles } from "./styles";
import productsList from "../../../db.json";

//TODO DRY it and make it more dynamic
export default function Showcase() {
  const classes = useStyles();
  let newProducts = shuffleArray(productsList);
  return (
    <Container>
      <Row className="align-items-center">
        <Col className="mb-4" md={6} lg={4}>
          <div
            className={`w-100 h-100 d-flex align-content-center position-relative`}
          >
            <Image src={newProducts[0].image} fluid />

            <div className={classes.overlay}></div>
            <div className={classes.messageBox}>
              <h3>{newProducts[0].name}</h3>
              <a href="#home">
                Buy Now <FontAwesomeIcon icon="external-link-alt" />
              </a>
              <DiscountBadge value={30} />
            </div>
          </div>
        </Col>
        <Col
          className="mb-4"
          md={{ span: 12, order: 1 }}
          lg={{ span: 4, order: 0 }}
        >
          <Row>
            <Col className="mb-4" md={6} lg={12}>
              <div
                className={`w-100 h-100 d-flex align-content-center position-relative`}
              >
                <Image src={newProducts[1].image} fluid />
                <div className={classes.overlay}></div>
                <div className={classes.messageBox}>
                  <h3>{newProducts[1].name}</h3>
                  <h4>${newProducts[1].price}</h4>
                </div>
              </div>
            </Col>
            <Col className="mb-4" md={6} lg={12}>
              <div
                className={`w-100 h-100 d-flex align-content-center position-relative`}
              >
                <Image src={newProducts[2].image} fluid />
                <div className={classes.overlay}></div>
                <div className={`${classes.messageBox} text-right`}>
                  <h3>{newProducts[2].name}</h3>
                  <a href="#home">Buy now</a>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col className="mb-4" md={{ span: 6 }} lg={{ span: 4 }}>
          <div
            className={`w-100 h-100 d-flex align-content-center position-relative`}
          >
            <Image src={newProducts[3].image} fluid />
            <div className={classes.overlay}></div>
            <div className={classes.messageBox}>
              <h3>{newProducts[3].name}</h3>
              <h4>${newProducts[3].price}</h4>
              <a href="#home">
                Buy now <FontAwesomeIcon icon="external-link-alt" />
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
