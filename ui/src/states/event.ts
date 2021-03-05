import { action, Action } from "easy-peasy";


export interface EventState {
    createEventDia:boolean
    setCreateEventDia:Action<EventState,boolean>

}


export const eventState: EventState = {
    createEventDia:false,
    setCreateEventDia:action((state,payload)=>{
        state.createEventDia = payload
    })
}