import React from "react";

import { useSetSize, useThemeContext, withThemeContext } from "./context";

import "./index.css";

const ThemeSwitcher = ({}) => {
  const { context, setColor } = useThemeContext();
  const [setSize] = useSetSize();

  return (
    <div>
      <div
        style={{
          width: 50 * context.size,
          height: 50 * context.size,
          background: context.color,
        }}
      ></div>
      <button onClick={() => setColor("green")}>set to green</button>
      <button onClick={() => setSize(2)}>set size to two</button>
    </div>
  );
  // return (
  //   <ThemeContext.Consumer>
  //     {value => value?.context?.color ?? "i don't know"}
  //   </ThemeContext.Consumer>
  // );
};

const Template = ({ children }) => {
  return (
    <div>
      <ThemeSwitcher />
      {children}
    </div>
  );
};

const App = withThemeContext(Template);

const Main = () => {
  return (
    <div className={"lesson5 main"}>
      <App />
      <App />
      <App>
        <App />
      </App>
    </div>
  );
};

export default Main;
