import { get,patch,post,postFile } from "./http";

export const getUserDetails = () => get(`/user`)
export const updateUserProfile = (payload:any) => patch(`/user`,payload)
export const uploadSinglePhoto = (payload:any) => postFile(`/user/singlePhoto`,payload)


