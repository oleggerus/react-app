import React, { useEffect, useRef } from "react";

import "./index.css";

class WithRef extends React.Component {
  render() {
    return <div>WithRef</div>;
  }
}

const WithForwardRef = ({
  prop1,
  prop2,
  thisPropContainsForwardedRef,
  ...rest
}) => {
  return (
    <>
      <div>WithForwardRef</div>
      <input ref={thisPropContainsForwardedRef} value={"initial"}></input>
    </>
  );
};

const WithForwardRefWrap = React.forwardRef((props, ref) => (
  <WithForwardRef {...props} thisPropContainsForwardedRef={ref} />
));

const WorkingWithChildrenAndAnimals = ({ children }) => {
  console.log(children);
  return <div>{`test ${children?.length}\n`}</div>;
};

const GoodChild = ({ name }) => name;
const BadChild = ({ name }) => {
  useEffect(() => {
    // console.log("MOUNT AND BLADE");
  }, []);
  // console.log("RENDER");
  return name;
};

class BadChildClassComponent extends React.PureComponent {
  componentDidMount() {
    // console.log("MOUNT AND BLADE");
  }
  render() {
    // console.log("RENDER");
    return this.props.name;
  }
}

const WorkingWithChildren = ({ children }) => {
  const firstChild = useRef(null);
  const normalChildren = React.Children.toArray(children) ?? [];
  firstChild.current = normalChildren[0];

  return (
    <div>
      {normalChildren.map((child, index) => {
        const isBad = child.type === BadChild;

        if (child.props.name === "Denis") {
          return React.cloneElement(child, { name: "TEST" });
        }

        if (!child.props.name) return null;

        if (child.props.name === "Jerry") {
          return (
            <div key={child.key} className={`child mouse`}>
              {child}
            </div>
          );
        }

        return (
          <div key={child.key} className={`child ${isBad ? "bad" : "good"}`}>
            {child}
          </div>
        );
      })}
    </div>
  );
};

const Main = () => {
  const firstRef = useRef(null);
  const forwRef = useRef(null);
  useEffect(() => {
    forwRef.current?.focus?.();
    console.log(forwRef.current?.value);
  }, []);

  return (
    <div className="main">
      {/* <WorkingWithChildrenAndAnimals></WorkingWithChildrenAndAnimals>
      <WorkingWithChildrenAndAnimals>
        <div>{"test"}</div>
      </WorkingWithChildrenAndAnimals>
      <WorkingWithChildrenAndAnimals>
        <div></div>
        <div></div>
      </WorkingWithChildrenAndAnimals>
      <WorkingWithChildrenAndAnimals>TEST</WorkingWithChildrenAndAnimals> */}

      <WorkingWithChildren>
        <BadChildClassComponent name={"Denis"} />
        <GoodChild name={"Will"} />
        <GoodChild name={"Shall"} />
        <BadChild name={"Wood"} />
        <GoodChild name={"Jerry"} />
        <BadChild name={"Tom"} />
        <BadChild />
      </WorkingWithChildren>

      <WithRef
        ref={node => {
          firstRef.current = node;
          // console.log(node);
        }}
      />

      <WithForwardRefWrap
        ref={node => {
          forwRef.current = node;
          console.log(node);
        }}
      />
    </div>
  );
};

export default Main;
