import { createStore } from "easy-peasy";
import { authState, AuthState } from "../states/auth";
import { eventState, EventState } from "../states/event";
import { postState, PostState } from "../states/post";
import { profileState, ProfileState } from "../states/profile";

export interface StoreModel {
  post:PostState,
  event:EventState,
  auth:AuthState,
  profile:ProfileState

}

export const storeModel1: StoreModel = {
    post:postState,
    event:eventState,
    auth:authState,
    profile:profileState
};


export const store = createStore(storeModel1);
