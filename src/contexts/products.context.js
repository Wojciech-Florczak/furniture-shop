import React, { createContext, useReducer } from "react";
import reducer from "../reducers/products.reducer";

export const ProductsContext = createContext();
export const DispatchContext = createContext();

const initialState = {
  min: 1,
  max: 1000,
  category: "",
  quantity: 5,
  currentPage: 1,
  searchQuery: ''
};

export function ProductsProvider(props) {
  const [products, dispatch] = useReducer(reducer, initialState);
  return (
    <ProductsContext.Provider value={products}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </ProductsContext.Provider>
  );
}
