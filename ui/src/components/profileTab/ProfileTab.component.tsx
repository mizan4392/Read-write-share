import { Card, Tabs } from "antd";
import React from "react";
import UserPost from "../userpost/UserPost.component";
import "./profileTab.css";

const { TabPane } = Tabs;
export const ProfileTab: React.FC = ({ children }) => {
  return (
    <Card style={{ borderRadius: "10px", marginTop: "5px" }}>
      <Tabs style={{ alignItems: "center" }} destroyInactiveTabPane>
        <TabPane tab="Posts" key="1" destroyInactiveTabPane>
          <UserPost />
        </TabPane>
        <TabPane tab="Events" key="2" destroyInactiveTabPane></TabPane>
        <TabPane tab="Saved" key="3" destroyInactiveTabPane></TabPane>
      </Tabs>
    </Card>
  );
};
