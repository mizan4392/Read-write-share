import { Card, Tabs } from 'antd'
import React from 'react'
import './profileTab.css'

const { TabPane } = Tabs
export const ProfileTab: React.FC = ({ children }) => {
    return <Card style={{borderRadius:"10px",marginTop:'5px'}}>
        <Tabs style={{ alignItems: 'center' }}>
            <TabPane tab="Posts" key="1"></TabPane>
            <TabPane tab="Events" key="2"></TabPane>
            <TabPane tab="Saved" key="3"></TabPane>

        </Tabs>
    </Card>

}

