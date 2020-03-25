const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, products: [...state.products, action.payload] };
    case "UPDATE_QTY":
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload.id
            ? { ...product, qty: (product.qty += action.payload.qty) }
            : product
        )
      };
    default:
      throw new Error();
  }
};

export default reducer;
