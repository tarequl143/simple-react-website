import React from "react";
import { VideoIconSvg } from "../../../icons";
import { PostProps } from "../Types";
import {
  PostImage,
  PostImgWrapper,
  PostVideoIcon,
  PostWrapper,
} from "./Styles";

const Post = React.memo(
  ({ thumbnail_url, media_urls, content_form }: PostProps) => {
    return (
      <PostWrapper>
        <PostImgWrapper>
          <PostImage
            src={
              thumbnail_url ||
              media_urls[0] ||
              "https://via.placeholder.com/300"
            }
          />
        </PostImgWrapper>
        {content_form === "VIDEO" && (
          <PostVideoIcon>
            <VideoIconSvg />
          </PostVideoIcon>
        )}
      </PostWrapper>
    );
  },
);

export default Post;
