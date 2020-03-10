import React, { useContext } from "react";
import {
  ProductsContext,
  DispatchContext
} from "../../contexts/products.context.js";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

export default function PriceRange() {
  const filters = useContext(ProductsContext);
  const dispatch = useContext(DispatchContext);

  return (
    <Form>
      <Form.Label>Filter by price</Form.Label>
      <Form.Row>
        <Col>
          <Form.Control
            placeholder={filters.min}
            type="number"
            min={1}
            max={filters.max}
            onChange={e =>
              dispatch({
                type: "MIN_PRICE",
                payload: parseInt(e.target.value)
              })
            }
          />
        </Col>
        <Col>
          <Form.Control
            type="number"
            min={1}
            placeholder={filters.max}
            onChange={e =>
              dispatch({
                type: "MAX_PRICE",
                payload: parseInt(e.target.value)
              })
            }
          />
        </Col>
      </Form.Row>
    </Form>
  );
}
