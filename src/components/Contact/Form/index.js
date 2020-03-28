import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useStyles } from "./styles";

export default function ContactForm() {
  const classes = useStyles();

  return (
    <Container>
      <Form className={classes.form}>
        <Form.Group>
          <Form.Control type="text" placeholder="Your name" />
        </Form.Group>
        <Form.Group>
          <Form.Control type="email" placeholder="Your email" />
        </Form.Group>
        <Form.Group>
          <Form.Control type="text" label="Subject" placeholder="Subject" />
        </Form.Group>
        <Form.Group>
          <Form.Control as="textarea" rows="4" placeholder="Message" />
        </Form.Group>
        <Button variant="secondary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
