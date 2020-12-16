import React, {
  useRef,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from "react";

import "./index.css";

const PseudoInput = props => {
  return <input className={"ant-input"} {...props} />;
};

const PseudoCheckbox = props => {
  return <input className={"ant-input"} {...props} type={"checkbox"} />;
};

// we want to have { name, checked } structure as value
const CombinedComponent = ({ value, onChange }) => {
  const isInitialized = useRef(false);
  const inputValue = useMemo(() => value?.name ?? "", [value]);
  const checkboxValue = useMemo(() => value?.checked ?? false, [value]);

  const handleInputChange = useCallback(
    e => {
      const {
        target: { value: name },
      } = e;
      const checked = name === "Hello World" ? true : checkboxValue;
      onChange?.({ ...value, name, checked });
    },
    [value, onChange, checkboxValue]
  );
  const handleCheckboxChange = useCallback(
    e => onChange?.({ ...value, checked: e.target.checked }),
    [value, onChange]
  );

  // useEffect(() => {
  //   if (isInitialized.current === false) {
  //     return (isInitialized.current = true);
  //   }

  //   if (inputValue === "Hello World" && !checkboxValue) {
  //     onChange?.({ ...value, checked: true });
  //   }
  // }, [inputValue]);

  return (
    <div>
      <div className={"combined-component"}>
        <PseudoInput value={inputValue} onChange={handleInputChange} />
        <PseudoCheckbox
          checked={checkboxValue}
          onChange={handleCheckboxChange}
        />
      </div>
    </div>
  );
};

const StateFullCombinedComponent = () => {
  const [value, onChange] = useState({ name: "Hello World", checked: false });

  return <CombinedComponent value={value} onChange={onChange} />;
};

const Main = () => {
  return (
    <div className={"lesson4 main"}>
      <StateFullCombinedComponent />
    </div>
  );
};

export default Main;
