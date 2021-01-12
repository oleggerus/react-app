import React from "react";
import { connect } from "react-redux";

import ReduxProvider from "./setupRedux";

const ReduxConsumerComponentTemplate = ({ dispatch, counter }) => {
  //   dispatch({ type: "a", someotherProp: 1 });
  //   dispatch({ type: 1 });
  //   dispatch({ type: 1, payload: { payloadKey1: "22" } });

  return (
    <div>
      ReduxConsumerComponentTemplate {counter}
      <button onClick={() => dispatch({ type: "a", someotherProp: 1 })}>
        Add one
      </button>
    </div>
  );
};
const ReduxConsumerComponent = connect(
  state => ({ counter: state.a }),
  dispatch => ({
    dispatch,
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
