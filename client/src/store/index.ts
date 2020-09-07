import { createStore, Action } from "easy-peasy";
import { AuthState, authStore } from "../startes/auth";
import { PostState, postState } from "../startes/post";
import { LikeState, likeState } from "../startes/like";
import { SaveState, saveState } from "../startes/save";

export interface StoreModel {
  auth: AuthState;
  post: PostState;
  like: LikeState;
  save: SaveState;
}

export const storeModel1: StoreModel = {
  auth: authStore,
  post: postState,
  like: likeState,
  save: saveState,
};

export const store = createStore(storeModel1);
