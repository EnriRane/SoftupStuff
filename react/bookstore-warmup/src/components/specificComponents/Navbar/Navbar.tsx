import "./Navbar.scss";
import { Layout, Menu } from "antd";
import { BookOutlined, SettingOutlined } from "@ant-design/icons";
import React from "react";

const { Sider } = Layout;

type NavbarType = {
  collapsed: boolean;
};

const Navbar: React.FC<NavbarType> = ({ collapsed }) => {
  return (
    <Sider
      theme="light"
      trigger={null}
      collapsible
      collapsed={collapsed}
      className="site-layout-background"
    >
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <BookOutlined />,
            label: "Books",
          },
          {
            key: "2",
            icon: <SettingOutlined />,
            label: "Settings",
          },
        ]}
      />
    </Sider>
  );
};
export default Navbar;
