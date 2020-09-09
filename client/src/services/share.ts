import { post, get } from "./http";

export const postShare = (payload) => {
  return post("/share", payload);
};

export const fetchSharedPost = () => {
  return get("/share");
};
