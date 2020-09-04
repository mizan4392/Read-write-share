import { post, get } from "./http";

export const createPost = (payload) => {
  return post("/post", payload);
};

export const fetchAllPost = () => {
  return get("/post/all");
};
