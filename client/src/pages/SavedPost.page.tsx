import React from "react";
import RenderPost from "../components/RenderPost.component";
import { useStoreActions, useStoreState } from "../hooks/easyPeasy";
export default function SavedPost() {
  const saveedPost = useStoreState((action) => action.save.saveedPost);

  return (
    <RenderPost
      post={null}
      totalLike={1}
      liked={false}
      onLike={() => {}}
      likeLoading={false}
    />
  );
}
