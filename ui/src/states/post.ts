import { action, Action, thunk, Thunk } from "easy-peasy";
import {post} from '../services/http'

export interface PostState {
    createPostDia:boolean
    setCreatePostDia:Action<PostState,boolean>

    createPostRes:boolean;
    createPostLod:boolean;
    setCreatePostRes:Action<PostState,boolean>
    setCreatePostLod:Action<PostState,boolean>
    createPost:Thunk<PostState,any>

}


export const postState: PostState = {
    createPostDia:false,
    setCreatePostDia:action((state,payload)=>{
        state.createPostDia = payload
    }),
    createPostRes:false,
    createPostLod:false,
    setCreatePostRes:action((state,payload)=>{
        state.createPostRes = payload
    }),
    setCreatePostLod:action((state,payload)=>{
        state.createPostLod = payload
    }),
    createPost:thunk(async(actions,payload)=>{
        actions.setCreatePostLod(true)
        const res = await post('/post',payload)
        if(res.status === 200 || res.status === 201){
            actions.setCreatePostRes(true)
            actions.setCreatePostLod(false)
        }else{
            actions.setCreatePostLod(false)  
        }
    })
}