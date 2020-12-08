import React from "react";
import PropTypes from "prop-types";

import "./index.css";

const Card = ({ text, color }) => {
  return (
    <div style={{ padding: 10, border: "1px solid black", color }}>{text}</div>
  );
};

const Label = ({ text, color }) => {
  return (
    <div style={{ padding: 10, borderBottom: "1px solid black", color }}>
      {text}
    </div>
  );
};

const GreenCard = ({ color, ...props }) => {
  return <Card {...props} color={"green"} />;
};

const CanBeGreenCard = props => {
  return <Card color={"green"} {...props} />;
};

const withGreenColor = WrappedComponent => {
  const WithGreenColor = props => (
    <WrappedComponent {...props} color={"green"} />
  );
  WithGreenColor.displayName = `withGreenColor${WrappedComponent.displayName ?? WrappedComponent.name ?? "Component"
    }`;

  return WithGreenColor;
};

const HocGreenCard = withGreenColor(Card);
const HocGreenLabel = withGreenColor(Label);

const TextElement = ({ component: Component, ...props }) => {
  return (
    <div className={"myTextElement"}>
      {Component && <Component {...props} />}
    </div>
  );
};

TextElement.defaultProps = {
  //   Component: Label,
};

TextElement.propTypes = {
  component: PropTypes.elementType.isRequired,
  randomProp: (props, propName, componentName, ...rest) => {
    // console.log(props, propName, componentName);
    // console.log(...rest);
    const value = props[propName];

    if (!value)
      return new Error(`${componentName} has no ${propName} set. DO SOMETHING`);
  },
};

const Main = () => {
  return (
    <div className={"lesson1 main"}>
      <Card text={"Hello!"} />
      <GreenCard text={"Hello mr. Green!"} color={"red"} />
      <CanBeGreenCard text={"Hello mr. Green!"} />
      <CanBeGreenCard text={"Hello mr. Green!"} color={"red"} />
      <HocGreenCard text={"Hello high mr. Green!"} color={"red"} />
      <HocGreenLabel text={"I am label"} />
      <TextElement text={"Error"} />
      <TextElement component={Label} text={"Just so"} />
    </div>
  );
};

export default Main;
