import { get,patch,post } from "./http";

export const getUserDetails = (userId:number) => get(`/user/${userId}`)
export const updateUserProfile = (payload:number) => patch(`/user`,payload)
