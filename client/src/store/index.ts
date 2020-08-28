import { createStore, Action } from "easy-peasy";

export interface StoreModel {}

export const storeModel1: StoreModel = {};

export const store = createStore(storeModel1);
