import React from "react";
import { Form, Button, Container } from "react-bootstrap";

export default function ContactForm() {
  return (
    <Container>
      <Form>
        <Form.Control type="text" placeholder="Your name" />
        <Form.Control type="email" placeholder="Your email" />
        <Form.Control type="text" label="Subject" placeholder="Subject" />
        <Form.Control as="textarea" rows="4" placeholder="Message" />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
