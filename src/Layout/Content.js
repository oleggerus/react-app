import React from "react";
import "antd/dist/antd.css";
import "./../index.css";
import { Layout, Breadcrumb } from "antd";

import Anton from "../Components/PersonalInfo/anton";
import Oleh from "../Components/PersonalInfo/oleh";
import Lesson1 from "../Components/Lessons/Lesson1";
import Lesson2 from "../Components/Lessons/Lesson2";
import Lesson3 from "../Components/Lessons/Lesson3";
import Lesson4 from "../Components/Lessons/Lesson4";
import Lesson5 from "../Components/Lessons/Lesson5";
import Lesson6 from "../Components/Lessons/Lesson6";

const { Content } = Layout;

const AppContent = ({ itemToDisplay }) => {  
  const components = {
    1: (
      <div>
        <Oleh />
      </div>
    ),
    2: (
      <div>
        <Anton />
      </div>
    ),
    3: (
      <div>
        <Lesson1 />
      </div>
    ),
    4: (
      <div>
        <Lesson2 />
      </div>
    ),
    5: (
      <div>
        <Lesson3 />
      </div>
    ),
    6: (
      <div>
        <Lesson4 />
      </div>
    ),
    7: (
      <div>
        <Lesson5 />
      </div>
    ),
    8: <div><Lesson6/></div>,
    // 9: <div><Lesson7/></div>,
    19: <div>Empty</div>,
  };

  return (
    <>
      <Content style={{ margin: "0 16px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Oleh</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          {components[itemToDisplay]}
        </div>
      </Content>
    </>
  );
};

export default React.memo(AppContent);
