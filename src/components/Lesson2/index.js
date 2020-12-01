import React, { useState, useCallback } from "react";

import "./index.css";

const StatelessComponent = ({ expanded, text, extraText, onClick }) => {
  return (
    <div className={"expandable-text-container"} onClick={onClick}>
      <div className={"expandable-text-container__text"}>{text}</div>
      {expanded && extraText && (
        <div className={"expandable-text-container__extra-text"}>
          {extraText}
        </div>
      )}
    </div>
  );
};

StatelessComponent.defaultProps = {
  expanded: true,
};

const StateFullComponent = ({ defaultExpanded, text, extraText }) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <StatelessComponent
      text={text}
      expanded={expanded}
      extraText={extraText}
      onClick={() => setExpanded(expanded => !expanded)}
    />
  );
};

StateFullComponent.defaultProps = {
  defaultExpanded: false,
};

const CorrectComponent = ({ defaultExpanded, expanded, onClick, ...rest }) => {
  const [localExpanded, setLocalExpanded] = useState(defaultExpanded);
  const thisExpanded = expanded !== undefined ? expanded : localExpanded;
  const thisHandleClick = useCallback(
    (...params) => {
      setLocalExpanded(p => !p);
      onClick?.(...params);
    },
    [onClick]
  );

  return (
    <StatelessComponent
      {...rest}
      expanded={thisExpanded}
      onClick={thisHandleClick}
    />
  );
};

CorrectComponent.defaultProps = {
  //   ...StatelessComponent.defaultProps,
  defaultExpanded: false,
};

const TestComponent = ({}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <button onClick={() => setExpanded(p => !p)}>Expand</button>
      <CorrectComponent
        expanded={expanded}
        text={"Hello"}
        // onClick={() => alert("i work")}
        extraText={"i'm not in contol. HELP ME!!!"}
      />
    </div>
  );
};

const Main = () => {
  return (
    <div className={"lesson2"}>
      <StatelessComponent text={"Hello"} extraText={"there!"} />
      <StatelessComponent expanded text={"Hello"} extraText={"there!"} />

      <StateFullComponent text={"Hello"} extraText={"there!"} />

      <CorrectComponent
        // onClick={() => alert("i work")}
        text={"Hello"}
        extraText={"there!"}
      />
      <CorrectComponent expanded text={"Hello"} extraText={"there!"} />
      <TestComponent />
    </div>
  );
};

export default Main;
