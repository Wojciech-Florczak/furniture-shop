const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      if (
        state.products.filter(prod => prod.id === action.payload.id).length > 0
      ) {
        return {
          ...state,
          products: state.products.map(product => {
            if (product.id === action.payload.id) {
              product.qty++;
              return product;
            } else {
              return product
            }
          })
        };
      } else {
        return { ...state, products: [...state.products, action.payload] };
      }
    default:
      throw new Error();
  }
};

export default reducer;
