import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Link } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";

export default function Navigation() {
  const [show, setShow] = useState(false);

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Link className="navbar-brand" to="/">
        Furnitu.re
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Item>
            <NavLink className="nav-link" exact to="/">
              Home
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink className="nav-link" exact to="/product">
              Products
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <FontAwesomeIcon icon="search" />
          </Nav.Item>
          <Nav.Item>
            <FontAwesomeIcon icon="heart" />
          </Nav.Item>
          <Nav.Item>
            <button onClick={()=> setShow(true)}>
              <FontAwesomeIcon icon="shopping-cart" />
            </button>
            <ShoppingCart show={show} onHide={() => setShow(false)} />
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}