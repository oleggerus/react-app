import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

const reducer = (state = { a: "" }, action) => {
  console.log(action);
  if (action.type === "a")
    return {
      ...state,
      a: +state.a + 1,
    };
  return state;
};
const store = createStore(reducer);

const Main = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Main;
