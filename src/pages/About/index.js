import React from "react";
import Team from "../../components/About/Team";
import SocialMedia from "../../components/About/SocialMedia";
import Introduction from "../../components/About/Introduction";
import { Container } from "react-bootstrap";

export default function About() {
  return (
    <Container>
      <Introduction />
      <SocialMedia />
      <Team />
    </Container>
  );
}
