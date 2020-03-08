const reducer = (state, action) => {
  switch (action.type) {
    case "minPrice":
      if (isNaN(action.payload)) action.payload = 1;
      return { ...state, min: action.payload };
    case "maxPrice":
      if (isNaN(action.payload)) action.payload = 1000;
      return { ...state, max: action.payload };
    case "category":
      if (action.payload === state.category) action.payload = "";
      return { ...state, category: action.payload };
    case "quantity":
      return { ...state, quantity: action.payload };
    case "pageChange":
      return { ...state, currentPage: action.payload };
    default:
      throw new Error();
  }
};

export default reducer;
