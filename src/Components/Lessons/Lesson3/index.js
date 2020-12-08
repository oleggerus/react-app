import React from "react";

const WithRef = ({ prop1, prop2, ...rest }) => {
  return <div>WithRef</div>;
};

const WithForwardRef = ({
  prop1,
  prop2,
  thisPropContainsForwardedRef,
  ...rest
}) => {
  return <div>WithForwardRef</div>;
};

const WorkingWithChildrenAndAnimals = ({ children }) => { };

const Main = () => { return (<div className='main'></div>) };

export default Main;
