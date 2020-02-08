import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Navigation() {
  return (
    <Navbar bg="light" expand="md" sticky="top">
      <Navbar.Brand href="#home">Furnitu.re</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Item>
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Link href="#products">Products</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
