import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStyles } from "./styles";

export default function Data() {
  const classes = useStyles();

  return (
    <Container>
      <Row className="p-4 p-4">
        <Col md={4}>
          <div className={classes.contentWrapper}>
            <span className={classes.title}>Address</span>
            <p className={classes.centerElement}>
              90 Cambridge Road, YO6 9SN
              <br />
              Normanby
            </p>
            <FontAwesomeIcon icon="map-marker-alt" />
          </div>
        </Col>
        <Col md={4}>
          <div className={classes.contentWrapper}>
            <span className={classes.title}>Phone</span>
            <a className={classes.centerElement} href="tel:+1(555) 489 23 11">
              +1(555) 489 23 11
            </a>
            <FontAwesomeIcon icon="phone" />
          </div>
        </Col>
        <Col md={4}>
          <div className={classes.contentWrapper}>
            <span className={classes.title}>E-mail</span>
            <a className={classes.centerElement} href="mailto:info@furnitu.re">
              info@furnitu.re
            </a>
            <FontAwesomeIcon icon="envelope" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
