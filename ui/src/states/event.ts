import { action, Action, thunk, Thunk } from "easy-peasy";
import {post} from '../services/http'

export interface EventState {
    createEventDia:boolean
    setCreateEventDia:Action<EventState,boolean>


    createEventRes:boolean;
    createEventLod:boolean;
    setCreateEventRes:Action<EventState,boolean>
    setCreateEventLod:Action<EventState,boolean>
    createEvent:Thunk<EventState,any>


}


export const eventState: EventState = {
    createEventDia:false,
    setCreateEventDia:action((state,payload)=>{
        state.createEventDia = payload
    }),
    createEventRes:false,
    createEventLod:false,
    setCreateEventRes:action((state,payload)=>{
        state.createEventRes = payload
    }),
    setCreateEventLod:action((state,payload)=>{
        state.createEventLod = payload
    }),
    createEvent:thunk(async(actions,payload)=>{
        actions.setCreateEventLod(true)
        const res = await post('/events',payload)
        if(res.status === 200 || res.status === 201){
            actions.setCreateEventRes(true)
            actions.setCreateEventLod(false)
        }else{
            actions.setCreateEventLod(false)  
        }
    })
}