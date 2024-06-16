import { combineReducers, createStore } from "redux";
import inboxReducer from "./slices/inboxSlice";
import cartReducer from "./slices/cartSlice";

const store = createStore(
  combineReducers({
    inboxReducer: inboxReducer,
    cartReducer: cartReducer,
  })
);

export default store;
