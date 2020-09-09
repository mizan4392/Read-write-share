import React, { useEffect, useState } from "react";
import RenderPost from "../components/RenderPost.component";
import { useStoreActions, useStoreState } from "../hooks/easyPeasy";
import { Spin } from "antd";
export default function SharedPost() {
  const { shareedPost, shareLoading } = useStoreState((state) => state.share);
  const { user } = useStoreState((state) => state.auth);

  const [sharedPosts, setSharedPosts] = useState<any>([]);

  useEffect(() => {
    generatePostData();
  }, [shareedPost]);

  function generatePostData() {
    let post: any = [];

    shareedPost?.map((p) => {
      let data = {
        ...p.post,
      };
      post.push(data);
    });
    setSharedPosts(post);
  }

  return shareLoading ? (
    <div style={{ textAlign: "center" }}>
      <Spin />
    </div>
  ) : (
    sharedPosts?.map((post) => {
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
