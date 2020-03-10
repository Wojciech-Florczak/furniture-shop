const reducer = (state, action) => {
  switch (action.type) {
    case "MIN_PRICE":
      if (isNaN(action.payload)) action.payload = 1;
      return { ...state, min: action.payload };
    case "MAX_PRICE":
      if (isNaN(action.payload)) action.payload = 1000;
      return { ...state, max: action.payload };
    case "CATEGORY":
      if (action.payload === state.category) action.payload = "";
      return { ...state, category: action.payload };
    case "QUANTITY":
      return { ...state, quantity: action.payload };
    case "PAGE_CHANGE":
      return { ...state, currentPage: action.payload };
    case "SEARCH":
      return { ...state, searchQuery: action.payload };
    default:
      throw new Error();
  }
};

export default reducer;
