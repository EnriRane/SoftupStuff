import React, { useState } from "react";
import { Breadcrumb, Layout } from "antd";
import { Outlet } from "react-router-dom";
import "./AppApperance.scss";
import AppHeader from "../../specificComponents/AppHeader/AppHeader";
import Navbar from "../../specificComponents/Navbar/Navbar";
const { Content, Footer } = Layout;

const AppAppearance: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="site-page-header">
      <AppHeader collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout>
        <Navbar collapsed={collapsed} />
        <Layout style={{ padding: "0 24px 24px", height: "95vh" }}>
          <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Created in 2022 by Enri Rane
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AppAppearance;
