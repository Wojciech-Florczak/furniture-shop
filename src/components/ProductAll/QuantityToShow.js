import React, { useContext } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import {
  ProductsContext,
  DispatchContext
} from "../../contexts/products.context.js";

export default function QuantityToShow() {
  const filters = useContext(ProductsContext);
  const dispatch = useContext(DispatchContext);

  return (
    <div>
      <h3>Show</h3>
      <DropdownButton title={filters.quantity}>
        <Dropdown.Item
          onClick={e =>
            dispatch({
              type: "quantity",
              payload: parseInt(e.target.text)
            })
          }
        >
          5
        </Dropdown.Item>
        <Dropdown.Item
          onClick={e =>
            dispatch({
              type: "quantity",
              payload: parseInt(e.target.text)
            })
          }
        >
          10
        </Dropdown.Item>
        <Dropdown.Item
          onClick={e =>
            dispatch({
              type: "quantity",
              payload: parseInt(e.target.text)
            })
          }
        >
          20
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
}
