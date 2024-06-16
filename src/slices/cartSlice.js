const initialState = {
  total: parseFloat(0).toFixed(2),
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "cart/add":
      return {
        ...state,
        total: parseFloat(parseFloat(state.total) + action.amount).toFixed(2),
        items: [...state.items, action.item],
      };
    case "cart/remove":
      return {
        ...state,
        total: parseFloat(parseFloat(state.total) - action.amount).toFixed(2),
        items: [
          ...state.items.slice(0, action.index),
          ...state.items.slice(action.index + 1),
        ],
      };

    default:
      return state;
  }
};

export default cartReducer;
