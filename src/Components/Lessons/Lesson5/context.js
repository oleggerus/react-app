import React, { useState, useMemo, useContext, useCallback } from "react";

import "./index.css";

export const useSetSize = () => {
  const { setSize } = useContext(ThemeContext);

  return [setSize];
};

export const useThemeContextValue = () => {
  const [context, setContext] = useState({ color: "red", size: 1 });
  const setColor = useCallback(
    color => setContext(old => ({ ...old, color })),
    [setContext]
  );
  const setSize = useCallback(size => setContext(old => ({ ...old, size })), [
    setContext,
  ]);
  const value = useMemo(() => ({ context, setColor, setSize }), [
    context,
    setColor,
    setSize,
  ]);

  return value;
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const withThemeContext = ComponentForWrap => {
  return props => {
    const value = useThemeContextValue();

    return (
      <ThemeContext.Provider value={value}>
        <ComponentForWrap {...props} />
      </ThemeContext.Provider>
    );
  };
};

const ThemeContext = React.createContext("light");

export const Context = ThemeContext;
