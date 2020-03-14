import React from "react";
import { Col, Row, Container, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStyles } from "./styles";
import { tagsList, socialMediaList, paymentProcessorsList } from "./config";

//TODO divide this components into smaller ones?
export default function Footer() {
  const classes = useStyles();
  return (
    <Container>
      <Row>
        <Col md={6} xl={3}>
          <h2>Furnitu.re</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit nisi velit iure adipisci consequatur laborum dolorum.
          </p>
          <ul className={classes.socialList}>
            {socialMediaList.map(site => {
              return (
                <li>
                  <a href="#home">
                    <FontAwesomeIcon icon={["fab", site]} />
                  </a>
                </li>
              );
            })}
          </ul>
        </Col>
        <Col md={6} xl={3}>
          <h5>Twitter</h5>
          <ul className={classes.twitterList}>
            <li>
              <FontAwesomeIcon icon={["fab", "twitter"]} className="mr-3" />
              <div>
                <p className="mb-0">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
                <a href="#home">https://t.co/mrKNJ9nEDt</a>
              </div>
            </li>
            <li>
              <FontAwesomeIcon icon={["fab", "twitter"]} className="mr-3" />
              <div>
                <p className="mb-0">
                  Tempore aspernatur veniam autem quidem exercitationem commodi.
                </p>
                <a href="#home">https://t.co/vrelK4nEDt</a>
              </div>
            </li>
          </ul>
        </Col>
        <Col md={6} xl={3}>
          <h5>Product Tags</h5>
          {tagsList.map(tag => {
            return (
              <Badge
                key={tag}
                variant="secondary"
                pill
                className="m-1 text-capitalize"
                style={{ fontSize: "1rem" }}
              >
                {tag}
              </Badge>
            );
          })}
        </Col>
        <Col md={6} xl={3}>
          <h5>Information</h5>
          <ul className={classes.contactList}>
            <li>
              <p className="text-right">
                90 Cambridge Road, YO6 9SN
                <br />
                Normanby
              </p>
              <FontAwesomeIcon icon="map-marker-alt" className="ml-3" />
            </li>
            <li>
              <p className="text-right">+1(555) 489 23 11</p>
              <FontAwesomeIcon icon="phone" className="ml-3" />
            </li>
            <li>
              <p className="text-right">info@furnitu.re</p>
              <FontAwesomeIcon icon="envelope" className="ml-3" />
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col sm={6} xs={12}>
          <span>© Furnitu.re {new Date().getFullYear()}</span>
          <span> - All rights Reserved</span>
        </Col>
        <Col sm={6} xs={12} className="d-flex justify-content-end">
          {paymentProcessorsList.map(name => {
            return (
              <FontAwesomeIcon
                className={classes.ccIcons}
                size="2x"
                icon={["fab", name]}
              />
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}
