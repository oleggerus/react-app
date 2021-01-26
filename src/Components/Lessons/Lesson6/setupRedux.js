import React from "react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

const reducer = (state = { a: "" }, action) => {
  console.log(action);
  if (action.type === "a")
    return {
      ...state,
      a: +state.a + 1,
    };
  if (action.type === "github_counter") {
    return {
      ...state,
      a: +action.payload,
    };
  }
  return state;
};
const store = createStore(reducer, applyMiddleware(thunk));

const Main = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Main;
