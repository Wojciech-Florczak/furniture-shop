import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Link } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";
import SearchBox from "../ProductAll/SearchBox";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  icon: {
    fontSize: "1.6rem",
    color: "lightgray",
    height: "100%"
  },
  iconWrapper: {
    position: "relative",
    margin: {
      right: ".5rem",
      left: ".5rem"
    },
    cursor: "pointer",
    "& svg": {
      zIndex: -1
    }
  }
});

export default function Navigation() {
  const [showCart, setShowCart] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const classes = useStyles();

  const search = showSearchBox ? (
    <SearchBox navbar setShowSearchBox={setShowSearchBox}/>
  ) : (
    <FontAwesomeIcon
      icon="search"
      className={classes.icon}
      onClick={() => setShowSearchBox(true)}
    />
  );

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
          <Nav.Item className={classes.iconWrapper}>{search}</Nav.Item>
          <Nav.Item className={classes.iconWrapper}>
            <FontAwesomeIcon icon="heart" className={classes.icon} />
          </Nav.Item>
          <Nav.Item className={classes.iconWrapper}>
            <FontAwesomeIcon
              onClick={() => setShowCart(true)}
              icon="shopping-cart"
              className={classes.icon}
            />
            <ShoppingCart show={showCart} onHide={() => setShowCart(false)} />
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
