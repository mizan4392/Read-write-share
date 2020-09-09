import React from "react";
import { useStoreActions, useStoreState } from "../hooks/easyPeasy";
import { Spin } from "antd";
import RenderPost from "./RenderPost.component";
export default function UserPosts() {
  const { postLoading, allPosts } = useStoreState((state) => state.post);
  const { likeLoading, likeRes }: any = useStoreState((state) => state.like);
  const { user }: any = useStoreState((state) => state.auth);
  const { postLike, setLikeRes } = useStoreActions((action) => action.like);

  function onLike(data) {
    let liked = false;
    data?.likes?.map((l) => {
      if (l?.post?.id === data?.id) {
        if (l.user.id === user?.id) {
          liked = true;
        }
      }
    });

    if (!liked) {
      const postData: any = {
        user: user?.id,
        post: data?.id,
      };

      postLike(postData);
    }
  }

  return postLoading ? (
    <Spin />
  ) : (
    allPosts.map((post) => {
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
          onLike={(data) => onLike(data)}
          likeLoading={likeLoading}
          key={post.id}
        />
      );
    })
  );
}
