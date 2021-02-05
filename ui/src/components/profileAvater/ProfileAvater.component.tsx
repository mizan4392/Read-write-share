import { CameraOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import React from 'react'

import './profileAvater.css'

export const ProfileAvater: React.FC = ({ children }) => {
    return <div className="profile-card">
    <Avatar
      alt="Cindy Baker"
      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      className="Avatar"
    />
    <Tooltip title="Uplode Profile Photo">
      <label className="profilePhotoUplodeLabel">
        <CameraOutlined style={{ color: "#000"}} />
        <input type="file" style={{ display: "none" }}></input>
      </label>
    </Tooltip>
  </div>
}


