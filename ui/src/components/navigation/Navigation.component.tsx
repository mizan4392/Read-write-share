import { Breadcrumb, Menu } from "antd";
import Layout, { Content, Header } from "antd/lib/layout/layout";
import React from "react";
import { Container } from "../comon/Container.component";

interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = ({ children }) => {
  return (
    // <Container>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    // </Container>
  );
};
