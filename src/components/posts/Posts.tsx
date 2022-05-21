import React from "react";
import Post from "./post/Post";
import { AllPosts, PostsDate, PostsWrapper } from "./Styles";
import { PostsProps } from "./Types";

const Posts = React.memo(({ date, posts }: PostsProps) => {
  return (
    <PostsWrapper>
      <PostsDate>{date}</PostsDate>
      <AllPosts>
        {posts?.map((post) => (
          <Post key={post.uuid} {...post} />
        ))}
      </AllPosts>
    </PostsWrapper>
  );
});

export default Posts;
