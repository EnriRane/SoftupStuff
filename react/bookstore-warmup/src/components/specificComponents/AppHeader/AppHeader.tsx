import React from "react";
import { PageHeader, Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import softupLogo from "../../../assets/images/softupLogo.png";
import "./AppHeader.scss";
import { useNavigate } from "react-router-dom";

type HeaderType = {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
};
const AppHeader: React.FC<HeaderType> = ({ collapsed, setCollapsed }) => {
  const navigate = useNavigate();

  return (
    <PageHeader
      title="Softup Bookstore"
      subTitle={[
        <div onClick={() => setCollapsed(!collapsed)} className="trigger">
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>,
      ]}
      extra={[
        <Button
          onClick={() => {
            navigate("/auth/logout");
          }}
          key="1"
          type="primary"
        >
          Logout
        </Button>,
      ]}
      avatar={{
        src: `${softupLogo}`,
      }}
    />
  );
};
export default AppHeader;
