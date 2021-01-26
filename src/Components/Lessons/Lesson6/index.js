import React from "react";
import { connect } from "react-redux";

import ReduxProvider from "./setupRedux";

const ReduxConsumerComponentTemplate = ({
  dispatch,
  onClick,
  onDoubleClick,
  onCheck,
  counter,
}) => {
  //   dispatch({ type: "a", someotherProp: 1 });
  //   dispatch({ type: 1 });
  //   dispatch({ type: 1, payload: { payloadKey1: "22" } });

  return (
    <div>
      ReduxConsumerComponentTemplate {counter}
      <button onClick={onClick}>Add one</button>
      <button onClick={onCheck}>Add two</button>
    </div>
  );
};

const sendData = async dispatch => {
  let url =
    "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits";
  let res = await (await fetch(url)).json();

  dispatch({ type: "github_counter", payload: res.length, someotherProp: 1 });
};

const ReduxConsumerComponent = connect(
  state => ({ counter: state.a }),
  dispatch => ({
    dispatch,
    onClick: () => dispatch({ type: "a", someotherProp: 1 }),
    onDoubleClick: () => dispatch(sendData),
    onCheck: async () => {
      let url =
        "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits";
      let res = await (await fetch(url)).json();

      dispatch({
        type: "github_counter",
        payload: res.length,
        someotherProp: 1,
      });
    },
  }),
  null,
  {}
)(ReduxConsumerComponentTemplate);

const Lesson6 = () => {
  return (
    <ReduxProvider>
      <div className={"lesson6 main"}>
        <ReduxConsumerComponent testProp={"test"} />
      </div>
    </ReduxProvider>
  );
};

export default Lesson6;
