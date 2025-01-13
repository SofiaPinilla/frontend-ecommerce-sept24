import React, { useEffect } from "react";
import Post from "../Post/Post";
import { useDispatch } from "react-redux";
import { getAll } from "../../features/posts/postSlice";

const Posts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
  }, []);

  return (
    <div>
      Posts
      <Post /> {/* Pinta las publicaciones */}
    </div>
  );
};

export default Posts;
