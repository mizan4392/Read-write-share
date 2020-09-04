import { thunk, Action, Thunk, action, Actions } from "easy-peasy";

import { createPost } from "../services/post";

export interface EventState {
  createDia: boolean;
  setCreatePostDia: Action<EventState>;

  postRes: boolean;
  postLoading: boolean;
  setPostLoading: Action<EventState, any>;
  createPost: Thunk<EventState, any>;
  setPostRes: Action<EventState, any>;
}

export const eventState: EventState = {
  createDia: false,
  setCreatePostDia: action((state) => {
    state.createDia = !state.createDia;
  }),

  postRes: false,
  postLoading: false,
  createPost: thunk(async (actions, payload) => {
    actions.setPostLoading(true);
    const res = await createPost(payload);
    if (res.status === 200 || res.status === 201) {
      actions.setPostLoading(false);
      actions.setPostRes(true);
    } else {
      actions.setPostLoading(false);
    }
  }),
  setPostRes: action((state, payload) => {
    state.postRes = payload;
  }),
  setPostLoading: action((state, payload) => {
    state.postLoading = payload;
  }),
};
