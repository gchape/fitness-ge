const initialState = {
  inbox: [],
};

const inboxReducer = (state = initialState, action) => {
  switch (action.type) {
    case "inbox/add":
      return {
        ...state,
        inbox: [...state.inbox, action.message],
      };
    default:
      return state;
  }
};

export default inboxReducer;
