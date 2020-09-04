import { post, get } from "./http";

export const signup = (payload) => {
  return post("/auth/signup", payload);
};

export const login = (payload) => {
  return post("/auth/login", payload);
};

export const getUser = () => {
  return get("/user");
};
