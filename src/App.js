import React, { useState } from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Layout } from "antd";

import LeftMenu from "./Layout/LeftMenu";
import AppContent from "./Layout/Content";
const { Header, Footer } = Layout;

const BaseLayout = () => {
  const [displayItem, updateDisplayItem] = useState(1);
  const handleMenuClick = (menu) => {
    updateDisplayItem(menu.key);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <LeftMenu handleClick={handleMenuClick} />
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />

        <AppContent itemToDisplay={displayItem} />

        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default BaseLayout;
