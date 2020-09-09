import { thunk, Action, Thunk, action, Actions } from "easy-peasy";

import { postShare, fetchSharedPost } from "../services/share";

export interface ShareState {
  shareLoading: any;
  shareRes: boolean;
  postShareData: Thunk<ShareState, any>;
  setshareRes: Action<ShareState, any>;
  setshareLoading: Action<ShareState, any>;

  shareedPost: any;
  shareedPostLoading: boolean;
  setshareedPostLoading: Action<ShareState, any>;
  setshareedPost: Action<ShareState, any>;
  fetchshareedPost: Thunk<ShareState, any>;
}

export const shareState: ShareState = {
  shareLoading: null,
  shareRes: false,
  postShareData: thunk(async (actions, payload) => {
    actions.setshareLoading(payload.id);
    const res = await postShare(payload);
    if (res.status === 200 || res.status === 201) {
      actions.setshareLoading(false);
      actions.setshareRes(true);
    } else {
      actions.setshareLoading(false);
    }
  }),
  setshareRes: action((state, payload) => {
    state.shareRes = payload;
  }),
  setshareLoading: action((state, payload) => {
    state.shareLoading = payload;
  }),
  shareedPost: null,
  setshareedPost: action((state, payload) => {
    state.shareedPost = payload;
  }),
  fetchshareedPost: thunk(async (actions, payload) => {
    actions.setshareedPostLoading(true);
    const res = await fetchSharedPost();
    if (res.status === 200 || res.status === 201) {
      const data = await res.json();
      actions.setshareedPost(data);
      actions.setshareedPostLoading(false);
      actions.setshareRes(true);
    } else {
      actions.setshareedPostLoading(false);
    }
  }),
  shareedPostLoading: false,
  setshareedPostLoading: action((state, payload) => {
    state.shareedPostLoading = payload;
  }),
};
