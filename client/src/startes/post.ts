import { thunk, Action, Thunk, action, Actions } from "easy-peasy";

import {
  createPost,
  fetchAllPost,
  fetchLoginUserPost,
  fetchUserPosts,
} from "../services/post";

export interface PostState {
  createDia: boolean;
  setCreatePostDia: Action<PostState>;

  postRes: boolean;
  postLoading: boolean;
  setPostLoading: Action<PostState, any>;
  createPost: Thunk<PostState, any>;
  setPostRes: Action<PostState, any>;

  allPosts: any;
  allPostLoading: boolean;
  setAllPostLoading: Action<PostState, any>;
  fetchAllPost: Thunk<PostState, any>;
  setAllPosts: Action<PostState, any>;

  getPostForLoggedInUser: Thunk<PostState, any>;

  fetchUserPosts: Thunk<PostState, any>;
}

export const postState: PostState = {
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
  allPosts: [],
  allPostLoading: false,
  fetchAllPost: thunk(async (actions, payload) => {
    actions.setAllPostLoading(true);
    const res = await fetchAllPost();
    if (res.status === 200 || res.status === 201) {
      const data = await res.json();
      actions.setAllPostLoading(false);
      actions.setAllPosts(data);
    } else {
      actions.setAllPostLoading(false);
    }
  }),
  setAllPosts: action((state, payload) => {
    state.allPosts = payload;
  }),
  setAllPostLoading: action((state, payload) => {
    state.allPostLoading = payload;
  }),
  getPostForLoggedInUser: thunk(async (actions, payload) => {
    // actions.setAllPostLoading(true);
    const res = await fetchLoginUserPost(payload);
    if (res.status === 200 || res.status === 201) {
      const data = await res.json();
      // actions.setAllPostLoading(false);
      actions.setAllPosts(data);
    } else {
      // actions.setAllPostLoading(false);
    }
  }),
  fetchUserPosts: thunk(async (actions, payload) => {
    actions.setAllPostLoading(true);
    const res = await fetchUserPosts();
    if (res.status === 200 || res.status === 201) {
      const data = await res.json();
      actions.setAllPostLoading(false);
      actions.setAllPosts(data);
    } else {
      actions.setAllPostLoading(false);
    }
  }),
};
