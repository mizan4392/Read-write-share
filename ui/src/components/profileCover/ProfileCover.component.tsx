import { CameraOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd'
import React from 'react'
import { ProfileAvater } from '../profileAvater/ProfileAvater.component'
import './profileCover.css'
export const ProfileCover: React.FC = ({ children }) => {
    return   <div style={{ position: "relative" }}>
    <div style={{marginTop:"5px"}}>
      <img
        src="https://i.pinimg.com/originals/23/05/35/230535d2013c6b8f34e2304d050df22f.jpg"
        height="300px"
        width="100%"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          position: "relative",
          borderRadius:"15px"
        }}
      ></img>
      <Tooltip title="Uplode Cover Photo">
        <label className="CoverPhotoUplodeLabel">
          <CameraOutlined style={{ color: "#fff" }} />
          <input type="file" style={{ display: "none" }}></input>
        </label>
      </Tooltip>
    </div>
    <div>
        <ProfileAvater />
    </div>
  </div>

}
