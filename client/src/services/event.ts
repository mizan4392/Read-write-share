import { post } from "./http";

export const postEvent = (payload) => {
  return post("/events", payload);
};
