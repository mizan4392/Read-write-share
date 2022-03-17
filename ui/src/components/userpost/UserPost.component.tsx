import React, { useEffect } from "react";
import { useStoreState } from "../../hooks/easyPeasy";
import { get } from "../../services/http";

type Props = {};

export default function UserPost({}: Props) {
  const { user } = useStoreState((s) => s.auth);

  useEffect(() => {
    if (user) {
      const getPost = async () => {
        const res = await get("/post/user-post");
        if (res.ok) {
          const data = await res.json();
          console.log(data);
        }
      };
      getPost();
    }
  }, [user]);
  console.log("user", user);
  return <div>UserPost.component</div>;
}
