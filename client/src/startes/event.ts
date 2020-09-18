import { thunk, Action, Thunk, action, Actions } from "easy-peasy";

import { postEvent, fetchUserEvent, fetchGlobalEvt } from "../services/event";

export interface EventState {
  eventDia: boolean;
  setEventDia: Action<EventState>;

  postEvtRes: boolean;
  postEvtLod: boolean;
  setEvtRes: Action<EventState, any>;
  setEvtLod: Action<EventState, any>;
  postEvent: Thunk<EventState, any>;

  userEvent: any;
  userEvtLod: boolean;
  setUserEvtLod: Action<EventState, any>;
  fetchUserEvent: Thunk<EventState>;
  setUserEvent: Action<EventState, any>;

  fetchGlobalEvt: Thunk<EventState>;
}

export const eventState: EventState = {
  eventDia: false,
  setEventDia: action((state) => {
    state.eventDia = !state.eventDia;
  }),
  postEvtRes: false,
  postEvtLod: false,
  setEvtRes: action((state, payload) => {
    state.postEvtRes = payload;
  }),
  setEvtLod: action((state, payload) => {
    state.postEvtLod = payload;
  }),
  postEvent: thunk(async (actions, payload) => {
    actions.setEvtLod(true);
    const res = await postEvent(payload);

    if (res.status === 200 || res.status === 201) {
      actions.setEvtLod(false);
      actions.setEvtRes(true);
    } else {
      const data = await res.json();

      console.log(data);
      actions.setEvtLod(false);
    }
  }),
  userEvent: [],
  userEvtLod: false,
  fetchUserEvent: thunk(async (actions) => {
    actions.setUserEvtLod(true);
    const res = await fetchUserEvent();

    if (res.status === 200 || res.status === 201) {
      const data = await res.json();
      actions.setUserEvtLod(false);
      actions.setUserEvent(data);
    } else {
      actions.setUserEvtLod(false);
    }
  }),
  setUserEvtLod: action((state, payload) => {
    state.userEvtLod = payload;
  }),
  setUserEvent: action((state, payload) => {
    state.userEvent = payload;
  }),

  fetchGlobalEvt: thunk(async (actions) => {
    actions.setUserEvtLod(true);
    const res = await fetchGlobalEvt();

    if (res.status === 200 || res.status === 201) {
      const data = await res.json();
      actions.setUserEvtLod(false);
      actions.setUserEvent(data);
    } else {
      actions.setUserEvtLod(false);
    }
  }),
};
