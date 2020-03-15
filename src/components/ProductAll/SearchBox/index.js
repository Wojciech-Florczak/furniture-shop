import React, { useContext } from "react";
import { DispatchContext } from "../../../contexts/products.context.js";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import { useStyles } from "./styles";

export default function SearchBox({ navbar, setShowSearchBox }) {
  const dispatch = useContext(DispatchContext);
  const classes = useStyles(navbar);

  return (
    <>
      {navbar ? (
        <Form.Control
          type="text"
          placeholder="Search"
          className={classes.input}
          autoFocus
          onKeyPress={e => e.key === "Enter" && setShowSearchBox(false)}
        />
      ) : (
        <Form.Group>
          <Form.Label>Search</Form.Label>
          <Form.Control
            type="text"
            placeholder="Search"
            className={classes.input}
            onChange={e =>
              dispatch({ type: "SEARCH", payload: e.target.value })
            }
          />
        </Form.Group>
      )}
    </>
  );
}

SearchBox.propTypes = {
  navbar: PropTypes.bool,
  setShowSearchBox: PropTypes.func
};
