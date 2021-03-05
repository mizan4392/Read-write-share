import { createStore } from "easy-peasy";
import { eventState, EventState } from "../states/event";
import { postState, PostState } from "../states/post";

export interface StoreModel {
  post:PostState,
  event:EventState,
}

export const storeModel1: StoreModel = {
    post:postState,
    event:eventState
};


export const store = createStore(storeModel1);
