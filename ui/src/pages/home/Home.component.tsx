import Layout, { Content, Header } from "antd/lib/layout/layout";
import React from "react";
import { Navigation } from "../../components/navigation/Navigation.component";

export const Home: React.FC = () => {
  return (
    <Layout>
      <Header>
          <Navigation/>
      </Header>
      <Content></Content>
    </Layout>
  );
};
