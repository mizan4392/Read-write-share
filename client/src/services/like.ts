import { post } from "./http";

export const postLike = (payload) => {
  return post("/like", payload);
};
