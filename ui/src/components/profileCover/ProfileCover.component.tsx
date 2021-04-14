import { CameraOutlined } from '@ant-design/icons'
import { notification, Tooltip, Image, Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { useStoreActions, useStoreState } from '../../hooks/easyPeasy'
import { REACT_APP_ASSET_ROOT } from '../../utils/config'
import { ProfileAvater } from '../profileAvater/ProfileAvater.component'
import './profileCover.css'
export const ProfileCover: React.FC = ({ children }) => {

  const { userDetails, uploadSinglePhotoRes } = useStoreState(a => a.profile)
  const { uploadSinglePhoto, setUploadSinglePhotoRes, getUserDetails } = useStoreActions(a => a.profile)
  const [cover, setCover] = useState<boolean>(false)

  useEffect(() => {
    if (cover) {
      if (uploadSinglePhotoRes) {
        getUserDetails()
        notification.success({ message: "Cover photo updated" })
        setUploadSinglePhotoRes(false)
      }
    }

  }, [uploadSinglePhotoRes])
  function handleFileChange(event: any) {
    setCover(true)
    let postData = {
      file: event.target.files[0],
      type: "cover"
    }
    uploadSinglePhoto(postData)
  }


  return <div style={{ position: "relative" }}>
    <div style={{ marginTop: "5px" }}>

      <Image
        width={'100%'}
        height="300px"
        src={`${REACT_APP_ASSET_ROOT}${userDetails?.coverPhotoUrl}`}
        placeholder={
          <Image
            preview={false}
            src={`${REACT_APP_ASSET_ROOT}${userDetails?.coverPhotoUrl}`}
            width={200}
          />
        }
      />
      <Tooltip title="Uplode Cover Photo">
        <label className="CoverPhotoUplodeLabel">
          <CameraOutlined style={{ color: "#fff" }} />
          <input type="file" style={{ display: "none" }} onChange={handleFileChange}></input>
        </label>
      </Tooltip>
    </div>
    <div>
      <ProfileAvater />
    </div>
  </div>

}
