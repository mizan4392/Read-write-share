import { action, Action, thunk, Thunk } from "easy-peasy";
import {getUserDetails,updateUserProfile,uploadSinglePhoto} from '../services/profile'
export interface ProfileState{
    updateProfileDia:boolean;
    setUpdateProfileDia:Action<ProfileState,boolean>

    userDetails:any
    setUserDetails:Action<ProfileState,boolean>
    getUserDetails:Thunk<ProfileState,number>

    updateUserRes:boolean
    updateUserLod:boolean
    setUpdateUserRes:Action<ProfileState,boolean>
    setUpdateUserLod:Action<ProfileState,boolean>
    updateUserProfile:Thunk<ProfileState,any>

    uploadSinglePhotoRes:boolean
    setUploadSinglePhotoRes:Action<ProfileState,boolean>
    uploadSinglePhotoLod:boolean
    setUploadSinglePhotoLod:Action<ProfileState,boolean>
    uploadSinglePhoto:Thunk<ProfileState,any>
}


export const profileState:ProfileState={
    updateProfileDia:false,
    setUpdateProfileDia:action((state, payload) => {
        state.updateProfileDia = payload
    }),
    userDetails:null,
    setUserDetails:action((state, payload) => {
        state.userDetails = payload
    }),
    getUserDetails:thunk(async(actions,payload)=>{
        let res = await getUserDetails(payload)
        if(res.status === 200 || res.status === 201){
            let data = await res.json()
            actions.setUserDetails(data)
        }
    }),
    updateUserRes:false,
    updateUserLod:false,
    setUpdateUserRes:action((state, payload) => {
        state.updateUserRes = payload
    }),
    setUpdateUserLod:action((state, payload) => {
        state.updateUserLod = payload
    }),
    updateUserProfile:thunk(async(actions,payload)=>{
        actions.setUpdateUserLod(true)
        let res = await updateUserProfile(payload)
        if(res.status === 200 || res.status === 201){
            actions.setUpdateUserRes(true)
            actions.setUpdateUserLod(false)
        }else{
            actions.setUpdateUserLod(false)
        }
    }),
    uploadSinglePhotoRes:false,
    setUploadSinglePhotoRes:action((state, payload) => {
        state.uploadSinglePhotoRes = payload
    }),
    uploadSinglePhotoLod:false,
    setUploadSinglePhotoLod:action((state, payload) => {
        state.uploadSinglePhotoLod = payload
    }),
    uploadSinglePhoto:thunk(async(actions,payload)=>{
        actions.setUploadSinglePhotoLod(true)
        let formData = new FormData()
        formData.append("file",payload)
        let res = await uploadSinglePhoto(formData)

        if(res.status === 200 || res.status === 201){
            actions.setUploadSinglePhotoRes(true)
            actions.setUploadSinglePhotoLod(false)
        }else{
            actions.setUploadSinglePhotoLod(false)
        }
    }),
}