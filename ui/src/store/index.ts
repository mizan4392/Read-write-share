import { createStore } from "easy-peasy";
import { authState, AuthState } from "../states/auth";
import { eventState, EventState } from "../states/event";
import { postState, PostState } from "../states/post";

export interface StoreModel {
  post:PostState,
  event:EventState,
  auth:AuthState
}

export const storeModel1: StoreModel = {
    post:postState,
    event:eventState,
    auth:authState
};


export const store = createStore(storeModel1);
