import React from "react";
import * as Ant from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Outlet, useNavigate } from "react-router-dom";

interface ZustandAppProps {}

const ZustandApp: React.FC<ZustandAppProps> = (props) => {
  const navigate = useNavigate();

  const menuItems = [
    {
      label: "Customer",
      icon: React.createElement(UserOutlined),
      key: "/zustand/customer",
    },
    {
      label: "Product",
      icon: React.createElement(UserOutlined),
      key: "/zustand/product",
    },
    {
      label: "Order",
      icon: React.createElement(UserOutlined),
      key: "/zustand/order",
    },
  ];

  return (
    <Ant.Layout hasSider>
      <Ant.Layout.Sider
        style={{
          height: "100vh",
        }}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {}}
        onCollapse={(collapsed, type) => {}}
      >
        <div
          style={{
            padding: "10px",
            color: "#fff",
            textAlign: "center",
            fontSize: "30px",
          }}
        >
          Zustand
        </div>
        <Ant.Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["/zustand/customer"]}
          items={menuItems}
          onClick={(m) => {
            navigate(m.key);
          }}
        />
      </Ant.Layout.Sider>
      <Ant.Layout>
        <Ant.Layout.Content
          style={{
            padding: "50px",
            overflow: "initial",
            background: "#eee"
          }}
        >
          <Outlet />
        </Ant.Layout.Content>
      </Ant.Layout>
    </Ant.Layout>
  );
};

export default ZustandApp;
