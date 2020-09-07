import { thunk, Action, Thunk, action, Actions } from "easy-peasy";

import { postSave, fetchSavedPost } from "../services/save";

export interface SaveState {
  saveLoading: any;
  saveRes: boolean;
  postSaveData: Thunk<SaveState, any>;
  setSaveRes: Action<SaveState, any>;
  setSaveLoading: Action<SaveState, any>;

  saveedPost: any;
  setSaveedPost: Action<SaveState, any>;
  fetchSavedPost: Thunk<SaveState, any>;
}

export const saveState: SaveState = {
  saveLoading: null,
  saveRes: false,
  postSaveData: thunk(async (actions, payload) => {
    actions.setSaveLoading(payload.id);
    const res = await postSave(payload);
    if (res.status === 200 || res.status === 201) {
      actions.setSaveLoading(false);
      actions.setSaveRes(true);
    } else {
      actions.setSaveLoading(false);
    }
  }),
  setSaveRes: action((state, payload) => {
    state.saveRes = payload;
  }),
  setSaveLoading: action((state, payload) => {
    state.saveLoading = payload;
  }),
  saveedPost: null,
  setSaveedPost: action((state, payload) => {
    state.saveedPost = payload;
  }),
  fetchSavedPost: thunk(async (actions, payload) => {
    actions.setSaveLoading(payload.id);
    const res = await fetchSavedPost();
    if (res.status === 200 || res.status === 201) {
      actions.setSaveLoading(false);
      actions.setSaveRes(true);
    } else {
      actions.setSaveLoading(false);
    }
  }),
};
