import { CameraOutlined } from '@ant-design/icons'
import { Tooltip, Image, notification } from 'antd'
import React, { useEffect, useState } from 'react'
import './profileAvater.css'
import { useStoreActions, useStoreState } from '../../hooks/easyPeasy'
import { REACT_APP_ASSET_ROOT } from '../../utils/config'

export const ProfileAvater: React.FC = ({ children }) => {

  const { userDetails, uploadSinglePhotoRes } = useStoreState(a => a.profile)
  const { uploadSinglePhoto, setUploadSinglePhotoRes, getUserDetails } = useStoreActions(a => a.profile)

  const [profile,setProfile] = useState<boolean>(false)
  useEffect(() => {
    if(profile){
      if (uploadSinglePhotoRes) {
        getUserDetails()
        notification.success({ message: "Profile photo updated" })
        setUploadSinglePhotoRes(false)
        setProfile(false)
      }
    }

  }, [uploadSinglePhotoRes])



  function handleFileChange(event: any) {
    setProfile(true)
    let postData = {
      file: event.target.files[0],
      type: "profile"
    }
    uploadSinglePhoto(postData)
  }

  return <div className="profile-card">
    <Image
      className="Avatar"
      src={`${REACT_APP_ASSET_ROOT}${userDetails?.photoUrl}`}
      placeholder={
        <Image
          preview={false}
          src={`${REACT_APP_ASSET_ROOT}${userDetails?.photoUrl}`}
          width={'auto'}
          height={'auto'}
        />
      }
    />
    <Tooltip title="Uplode Profile Photo">
      <label className="profilePhotoUplodeLabel">
        <CameraOutlined style={{ color: "#000" }} />
        <input type="file" style={{ display: "none" }} onChange={handleFileChange}></input>
      </label>
    </Tooltip>
  </div>
}


