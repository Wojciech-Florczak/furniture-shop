import React, { useContext } from "react";
import {
  ProductsContext,
  DispatchContext
} from "../../contexts/products.context.js";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  priceFilter: {
    "& input": {
      maxWidth: 60,
      marginRight: 10
    }
  }
});

export default function PriceRange() {
  const filters = useContext(ProductsContext);
  const dispatch = useContext(DispatchContext);
  const classes = useStyles();

  return (
    <div className={classes.priceFilter}>
      <h4>Filter by Price</h4>
      <input
        type="number"
        min={1}
        max={filters.max}
        placeholder={filters.min}
        onChange={e =>
          dispatch({
            type: "minPrice",
            payload: parseInt(e.target.value)
          })
        }
      />
      <input
        type="number"
        min={1}
        placeholder={filters.max}
        onChange={e =>
          dispatch({
            type: "maxPrice",
            payload: parseInt(e.target.value)
          })
        }
      />
    </div>
  );
}
