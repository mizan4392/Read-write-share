import { createStore } from "easy-peasy";
import { postState, PostState } from "../states/post";

export interface StoreModel {
  post:PostState
}

export const storeModel1: StoreModel = {
    post:postState
};


export const store = createStore(storeModel1);
