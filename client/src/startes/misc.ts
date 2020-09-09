import { thunk, Action, Thunk, action, Actions } from "easy-peasy";

export interface MiscState {
  tabeKey: string;
  setTabKey: Action<MiscState, any>;
}

export const miscState: MiscState = {
  tabeKey: "1",
  setTabKey: action((state, payload) => {
    state.tabeKey = payload;
  }),
};
