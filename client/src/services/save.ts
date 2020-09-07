import { post, get } from "./http";

export const postSave = (payload) => {
  return post("/save", payload);
};

export const fetchSavedPost = () => {
  return get("/save");
};
