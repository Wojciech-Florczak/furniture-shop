import React, { createContext, useReducer } from "react";
import reducer from "../reducers/cart.reducer";

export const CartContext = createContext();
export const DispatchContext = createContext();

const initialState = {
  products: []
};

export function CartProvider(props) {
  const [cart, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={cart}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </CartContext.Provider>
  );
}
