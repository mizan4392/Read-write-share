import { post, get } from "./http";

export const postEvent = (payload) => {
  return post("/events", payload);
};

export const fetchUserEvent = () => {
  return get("/events");
};

export const fetchGlobalEvt = () => {
  return get("/events/global");
};
