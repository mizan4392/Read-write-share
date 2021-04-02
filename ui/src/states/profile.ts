import { action, Action, thunk, Thunk } from "easy-peasy";
import {getUserDetails,updateUserProfile} from '../services/profile'
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
}