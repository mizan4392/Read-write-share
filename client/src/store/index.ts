import { createStore, Action } from "easy-peasy";
import { AuthState, authStore } from "../startes/auth";
import { PostState, postState } from "../startes/post";

export interface StoreModel {
  auth: AuthState;
  post: PostState;
}

export const storeModel1: StoreModel = {
  auth: authStore,
  post: postState,
};

export const store = createStore(storeModel1);
