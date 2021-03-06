import React, { useEffect, useState } from "react";
import RenderPost from "../components/RenderPost.component";
import { useStoreActions, useStoreState } from "../hooks/easyPeasy";
import { Spin } from "antd";
export default function SavedPost() {
  const { saveedPost, saveedPostLoading } = useStoreState(
    (state) => state.save
  );
  const { user } = useStoreState((state) => state.auth);

  const [savedPosts, setSavedPosts] = useState<any>([]);

  useEffect(() => {
    generatePostData();
  }, [saveedPost]);

  function generatePostData() {
    let post: any = [];

    saveedPost?.map((p) => {
      let data = {
        ...p.post,
      };

      post.push(data);
    });
    setSavedPosts(post);
  }

  return saveedPostLoading ? (
    <div style={{ textAlign: "center" }}>
      <Spin />
    </div>
  ) : (
    savedPosts?.map((post) => {
      let totalLike = post?.likes?.length;
      let liked = false;
      post?.likes?.map((l) => {
        if (l?.post?.id === post?.id) {
          if (l.user.id === user?.id) {
            liked = true;
          }
        }
      });

      return (
        <RenderPost
          post={post}
          totalLike={totalLike}
          liked={liked}
          onLike={() => {}}
          likeLoading={false}
          key={post.id}
        />
      );
    })
  );
}
