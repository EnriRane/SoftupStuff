import React from "react";
import { PageHeader, Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import softupLogo from "../../../assets/images/softupLogo.png";
import "./AppHeader.scss";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

type HeaderType = {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
};
const AppHeader: React.FC<HeaderType> = ({ collapsed, setCollapsed }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

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
          {t("logout")}
        </Button>,
      ]}
      avatar={{
        src: `${softupLogo}`,
      }}
    />
  );
};
export default AppHeader;
