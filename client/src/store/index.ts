import { createStore, Action } from "easy-peasy";
import { AuthState, authStore } from "../startes/auth";
import { PostState, postState } from "../startes/post";
import { LikeState, likeState } from "../startes/like";
import { SaveState, saveState } from "../startes/save";
import { ShareState, shareState } from "../startes/share";
import { MiscState, miscState } from "../startes/misc";
import { eventState, EventState } from "../startes/event";

export interface StoreModel {
  auth: AuthState;
  post: PostState;
  like: LikeState;
  save: SaveState;
  share: ShareState;
  misc: MiscState;
  event: EventState;
}

export const storeModel1: StoreModel = {
  auth: authStore,
  post: postState,
  like: likeState,
  save: saveState,
  share: shareState,
  misc: miscState,
  event: eventState,
};

export const store = createStore(storeModel1);
