import { combineReducers, createStore } from "redux";
import inboxReducer from "./slices/inboxSlice";

const store = createStore(
  combineReducers({
    inboxReducer: inboxReducer,
  })
);

export default store;
