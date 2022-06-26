import "./Navbar.scss";
import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import { BookOutlined, SettingOutlined } from "@ant-design/icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const { Sider } = Layout;

type NavbarType = {
  collapsed: boolean;
};

const Navbar: React.FC<NavbarType> = ({ collapsed }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const onClick: MenuProps["onClick"] = (e) => {
    if (e.key === "books") {
      navigate("books");
    } else if (e.key === "settings") {
      navigate("settings");
    }
  };

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
        className="navbar"
        mode="inline"
        defaultSelectedKeys={["1"]}
        onClick={onClick}
        items={[
          {
            key: "books",
            icon: <BookOutlined />,
            label: `${t("navbar.books")}`,
          },
          {
            key: "settings",
            icon: <SettingOutlined />,
            label: `${t("navbar.settings")}`,
          },
        ]}
      />
    </Sider>
  );
};
export default Navbar;
