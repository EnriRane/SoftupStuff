import React, { useState } from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import "./AppApperance.scss";
import AppHeader from "../../specificComponents/AppHeader/AppHeader";
import Navbar from "../../specificComponents/Navbar/Navbar";

const AppAppearance: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="site-page-header">
      <AppHeader collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout>
        <Navbar collapsed={collapsed} />
        <Outlet />
      </Layout>
    </Layout>
  );
};

export default AppAppearance;
