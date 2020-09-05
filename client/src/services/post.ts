import { post, get } from "./http";

export const createPost = (payload) => {
  return post("/post", payload);
};

export const fetchAllPost = () => {
  return get("/post/all");
};
export const fetchLoginUserPost = (payload) => {
  return post("/post/user", payload);
};
