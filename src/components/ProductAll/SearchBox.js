import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import { DispatchContext } from "../../contexts/products.context.js";

export default function SearchBox() {
  const dispatch = useContext(DispatchContext);

  return (
    <Form.Group>
      <Form.Label>Search</Form.Label>
      <Form.Control
        type="text"
        placeholder="Search"
        onChange={e => dispatch({ type: "SEARCH", payload: e.target.value })}
      />
    </Form.Group>
  );
}
