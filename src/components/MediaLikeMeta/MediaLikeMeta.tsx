import React from "react";
import { MediaMeta, MediaMetaIcon, MediaMetaText } from "./Styles";
import { MediaLikeMetaProps } from "./Types";

const MediaLikeMeta = React.memo(({ icon, likeCount }: MediaLikeMetaProps) => {
  return (
    <MediaMeta>
      <MediaMetaIcon>{icon}</MediaMetaIcon>
      <MediaMetaText>{likeCount}</MediaMetaText>
    </MediaMeta>
  );
});

export default MediaLikeMeta;
