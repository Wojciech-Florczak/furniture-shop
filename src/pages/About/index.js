import React from "react";
import { Container, Row, Col, Figure } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStyles } from "./styles";

export default function About() {
  const classes = useStyles();

  return (
    <Container>
      <h1>Who we are?</h1>
      <p>
        Fugiat duis elit sint cupidatat aliquip ullamco incididunt. Velit
        excepteur sunt proident sunt ullamco quis. Fugiat amet reprehenderit
        magna tempor nulla cillum anim nulla aliquip velit. Laborum do aliqua ex
        eu elit incididunt veniam in. Id ea deserunt minim cupidatat irure
        cupidatat. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Consequuntur aliquam asperiores dignissimos! Tempora natus accusantium
        earum magni explicabo dolorem, animi, delectus dolor facere eos iure
        eligendi voluptatibus eius sunt magnam.
      </p>
      <b>Elit reprehenderit quis eu in laboris.</b>
      <p>
        Cupidatat sunt eu nisi in sit proident id anim in. Laboris laboris ut
        aliqua nulla adipisicing eiusmod ut ullamco dolore. Veniam tempor
        commodo aute pariatur dolore ea ullamco laborum. Laborum elit Lorem
        culpa aliquip. Mollit id consequat ad
      </p>
      <h3>Find us on Social Media</h3>
      <ul className={classes.socialList}>
        <li>
          <a href="#home">
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </a>
        </li>
        <li>
          <a href="#home">
            <FontAwesomeIcon icon={["fab", "facebook"]} />
          </a>
        </li>
        <li>
          <a href="#home">
            <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
          </a>
        </li>
        <li>
          <a href="#home">
            <FontAwesomeIcon icon={["fab", "youtube"]} />
          </a>
        </li>
        <li>
          <a href="#home">
            <FontAwesomeIcon icon={["fab", "google-plus"]} />
          </a>
        </li>
        <li>
          <a href="#home">
            <FontAwesomeIcon icon={["fab", "whatsapp"]} />
          </a>
        </li>
      </ul>
      <div>
        <h3>Our Team</h3>
        <Row>
          <Col md={3} className="d-flex justify-content-center">
            <Figure>
              <Figure.Image src="https://via.placeholder.com/300x300" />
              <Figure.Caption>Mark Cukierberg</Figure.Caption>
            </Figure>
          </Col>
          <Col md={3} className="d-flex justify-content-center">
            <Figure>
              <Figure.Image src="https://via.placeholder.com/300x300" />
              <Figure.Caption>Mark Cukierberg</Figure.Caption>
            </Figure>
          </Col>
          <Col md={3} className="d-flex justify-content-center">
            <Figure>
              <Figure.Image src="https://via.placeholder.com/300x300" />
              <Figure.Caption>Mark Cukierberg</Figure.Caption>
            </Figure>
          </Col>
          <Col md={3} className="d-flex justify-content-center">
            <Figure>
              <Figure.Image src="https://via.placeholder.com/300x300" />
              <Figure.Caption>Mark Cukierberg</Figure.Caption>
            </Figure>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
