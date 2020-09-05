import { thunk, Action, Thunk, action, Actions } from "easy-peasy";

import { postLike } from "../services/like";

export interface LikeState {
  likeRes: boolean;
  likeLoading: any;
  setLikeRes: Action<LikeState, boolean>;
  setLikeLoading: Action<LikeState, any>;
  postLike: Thunk<LikeState, any>;
}

export const likeState: LikeState = {
  likeRes: false,
  likeLoading: null,
  setLikeRes: action((state, payload) => {
    state.likeRes = payload;
  }),
  setLikeLoading: action((state, payload) => {
    state.likeLoading = payload;
  }),
  postLike: thunk(async (actions, payload) => {
    actions.setLikeLoading(payload.id);
    const res = await postLike(payload);

    if (res.status === 201 || res.status === 200) {
      actions.setLikeLoading(null);
      actions.setLikeRes(true);
    } else {
      actions.setLikeLoading(null);
    }
  }),
};
