import { action, Action } from "easy-peasy";


export interface PostState {
    createPostDia:boolean
    setCreatePostDia:Action<PostState,boolean>

}


export const postState: PostState = {
    createPostDia:false,
    setCreatePostDia:action((state,payload)=>{
        state.createPostDia = payload
    })
}