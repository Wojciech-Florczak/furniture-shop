import React, { useContext } from "react";
import { DispatchContext } from "../../../contexts/products.context.js";
import Form from "react-bootstrap/Form";

export default function QuantityToShow() {
  const dispatch = useContext(DispatchContext);

  const options = [5, 10, 20];
  const renderOptions = options.map(option => {
    return <option key={option}>{option}</option>;
  });

  return (
    <div>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Show</Form.Label>
        <Form.Control
          as="select"
          onChange={e =>
            dispatch({ type: "QUANTITY", payload: e.target.value })
          }
        >
          {renderOptions}
        </Form.Control>
      </Form.Group>
    </div>
  );
}
