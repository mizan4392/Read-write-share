import { createStore, Action } from "easy-peasy";
import { AuthState, authStore } from "../startes/auth";
import { PostState, postState } from "../startes/post";
import { LikeState, likeState } from "../startes/like";

export interface StoreModel {
  auth: AuthState;
  post: PostState;
  like: LikeState;
}

export const storeModel1: StoreModel = {
  auth: authStore,
  post: postState,
  like: likeState,
};

export const store = createStore(storeModel1);
