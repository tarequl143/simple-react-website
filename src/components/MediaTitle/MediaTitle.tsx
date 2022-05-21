import React from "react";
import { MediaCount, MediaMeta, MediaMetaText } from "./Styles";
import { MediaTitleProps } from "./Types";

const MediaTitle = React.memo(({ title, mediaCount }: MediaTitleProps) => {
  return (
    <MediaMeta>
      <MediaMetaText>
        {title} <MediaCount>({mediaCount})</MediaCount>
      </MediaMetaText>
    </MediaMeta>
  );
});

export default MediaTitle;
