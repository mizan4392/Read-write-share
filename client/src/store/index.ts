import { createStore, Action } from "easy-peasy";
import { AuthState, authStore } from "../startes/auth";

export interface StoreModel {
  auth: AuthState;
}

export const storeModel1: StoreModel = {
  auth: authStore,
};

export const store = createStore(storeModel1);
