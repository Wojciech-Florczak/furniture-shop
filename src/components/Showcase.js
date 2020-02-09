import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import productsList from "../db.json";
import shuffleArray from "../helpers/shuffle";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.2)"
  }
});

export default function Showcase() {
  const classes = useStyles();
  let newProducts = shuffleArray(productsList);
  return (
    <Container>
      <Row className="align-items-center">
        <Col className="mb-4" md={6} lg={4}>
          <div
            className={`p-1 w-100 h-100 d-flex align-content-center position-relative`}
          >
            <Image src={newProducts[0].image} fluid />

            <div className={classes.overlay}></div>
          </div>
        </Col>
        <Col className="mb-4" md={{ span: 12, order: 1 }} lg={{ span: 4, order: 0 }}>
          <Row>
            <Col className="mb-4" md={6} lg={12}>
              <div
                className={`p-1 w-100 h-100 d-flex align-content-center position-relative`}
              >
                <Image src={newProducts[2].image} fluid />
                <div className={classes.overlay}></div>
              </div>
            </Col>
            <Col className="mb-4" md={6} lg={12}>
              <div
                className={`p-1 w-100 h-100 d-flex align-content-center position-relative`}
              >
                <Image src={newProducts[3].image} fluid />
                <div className={classes.overlay}></div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col className="mb-4" md={{ span: 6 }} lg={{ span: 4 }}>
          <div
            className={`p-1 w-100 h-100 d-flex align-content-center position-relative`}
          >
            <Image src={newProducts[4].image} fluid />
            <div className={classes.overlay}></div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
