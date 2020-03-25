import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import SearchBox from "../../ProductAll/SearchBox/";
import ShoppingCart from "../ShoppingCart/";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStyles } from "./styles";
import { navLinks } from "./config";

export default function Navigation() {
  const [showCart, setShowCart] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();

  const search = showSearchBox ? (
    <SearchBox navbar setShowSearchBox={setShowSearchBox} />
  ) : (
    <FontAwesomeIcon
      icon="search"
      className={classes.icon}
      onClick={() => setShowSearchBox(true)}
    />
  );

  return (
    <Navbar bg="light" expand="lg" sticky="top" expanded={expanded}>
      <Link className="navbar-brand" to="/">
        Furnitu.re
      </Link>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={() => setExpanded(!expanded)}
      />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          {navLinks.map(item => {
            return (
              <Nav.Item key={item.name} onClick={() => setExpanded(false)}>
                <NavLink className="nav-link" exact={item.exact} to={item.path}>
                  {item.name}
                </NavLink>
              </Nav.Item>
            );
          })}
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
