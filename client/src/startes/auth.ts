import { thunk, Action, Thunk, action, Actions } from "easy-peasy";

import { signup, login, getUser } from "../services/auth";

export interface AuthState {
  signupRes: any;
  signupLoadnig: boolean;
  signup: Thunk<AuthState, any>;
  setSignupLoadnig: Action<AuthState, any>;
  setSignupRes: Action<AuthState, any>;

  loginLoading: boolean;
  loginRes: any;
  setLoginRes: Action<AuthState, any>;
  setLoginLoading: Action<AuthState, any>;
  login: Thunk<AuthState, any>;

  user: any;
  getUser: Thunk<AuthState, any>;
  setUser: Action<AuthState, any>;
}

export const authStore: AuthState = {
  signupLoadnig: false,
  signupRes: null,
  signup: thunk(async (actions, payload) => {
    actions.setSignupLoadnig(true);
    const res = await signup(payload);

    if (res.status === 200 || res.status === 201) {
      const data = await res.json();
      actions.setSignupRes(data);
      actions.setSignupLoadnig(false);
    } else {
      const data = await res.json();

      actions.setSignupRes(data);
      actions.setSignupLoadnig(false);
    }
  }),
  setSignupLoadnig: action((state, payload) => {
    state.signupLoadnig = payload;
  }),
  setSignupRes: action((state, payload) => {
    state.signupRes = payload;
  }),

  loginLoading: false,
  loginRes: null,
  setLoginRes: action((state, payload) => {
    state.loginRes = payload;
  }),
  setLoginLoading: action((state, payload) => {
    state.loginLoading = payload;
  }),
  login: thunk(async (actions, payload) => {
    actions.setLoginLoading(true);
    const res = await login(payload);
    if (res.status === 200 || res.status === 201) {
      const data = await res.json();
      localStorage.setItem("rwdtoken", data?.jwt);
      actions.setLoginLoading(false);
      actions.setLoginRes({ success: true, msg: "" });
      setTimeout(() => {
        actions.getUser();
      }, 500);
    } else {
      const data = await res.json();
      actions.setLoginLoading(false);
      actions.setLoginRes({ success: false, msg: data.message });
    }
  }),

  user: null,
  getUser: thunk(async (actions) => {
    const res = await getUser();
    if (res.status === 200 || res.status === 201) {
      const data = await res.json();
      actions.setUser(data);
    }
  }),
  setUser: action((state, payload) => {
    state.user = payload;
  }),
};
