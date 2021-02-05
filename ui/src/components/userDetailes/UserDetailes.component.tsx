
import { EditOutlined } from '@ant-design/icons'
import { Button, Card, Rate, Tooltip } from 'antd'
import React from 'react'
import { ProfileAvater } from '../profileAvater/ProfileAvater.component'
import { ProfileCover } from '../profileCover/ProfileCover.component'
import './userDetailes.css'

export const UserDetailes: React.FC = ({ children }) => {
    return <div>
        <Card
            style={{ width: 300, height: "300px" }}
            actions={[
                <Tooltip title="Update Profile">
                    <Button icon={<EditOutlined />} style={{width:"80%",borderRadius:"10px"}}></Button>
                </Tooltip>

            ]}
        >
            <div style={{ color: "black", textAlign: "left", marginTop: "80px" }}>
                <div style={{ textAlign: "center" }}> <Tooltip title="Rating"><Rate value={10} disabled /></Tooltip> <span>5.0</span></div>
                <div>
                    <div>
                        <span style={{ color: "black" }}></span>
                    </div>
                    <div>
                        <label style={{ color: "black" }}>Phone:</label>
                    </div>
                    <div>
                        <label style={{ color: "black" }}>
                            Address:
                  </label>
                    </div>
                    <div>
                        <label style={{ color: "black" }}>Email:</label>
                    </div>
                </div>
            </div>

        </Card>
    </div>
}

