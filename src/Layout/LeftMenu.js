import React, { useCallback, useState } from "react";
import "antd/dist/antd.css";
import "./../index.css";
import { Layout, Menu } from "antd";
import {
  DesktopOutlined,
  FileOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu } = Menu;

const LeftMenu = ({ handleClick }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = useCallback((collapsed) => setCollapsed(collapsed), [
    setCollapsed,
  ]);

  return (
    <>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<UserOutlined />} onClick={handleClick}>
            Oleh
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />} onClick={handleClick}>
            Anton
          </Menu.Item>
          <SubMenu key="sub1" icon={<DesktopOutlined />} title="User">
            <Menu.Item key="3" onClick={handleClick}>
              Lesson 1
            </Menu.Item>
            <Menu.Item key="4" onClick={handleClick}>
              Lesson 2
            </Menu.Item>
            <Menu.Item key="5" onClick={handleClick}>
              Lesson 3
            </Menu.Item>
            <Menu.Item key="6" onClick={handleClick}>
              Lesson 4
            </Menu.Item>
            <Menu.Item key="7" onClick={handleClick}>
              Lesson 5
            </Menu.Item>
            <Menu.Item key="8" onClick={handleClick}>
              Lesson 6
            </Menu.Item>
          </SubMenu>

          <Menu.Item key="19" icon={<FileOutlined />} onClick={handleClick}>
            Files
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
};

export default React.memo(LeftMenu);
