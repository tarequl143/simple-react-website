import React from "react";
import {
  InstaIconSvg,
  PrintarestIconSvg,
  TiktokIconSvg,
  YoutubeIconSvg,
} from "../../icons";
import MediaLikeMeta from "../MediaLikeMeta/MediaLikeMeta";
import {
  ProfileImg,
  ProfileMetInfos,
  ProfileName,
  ProfileTitle,
  UserProfileAvatar,
  UserProfileInfo,
  UserProfileWrapper,
} from "./Styles";
import { UserProfileProps } from "./Types";

const UserProfile = React.memo(({ name, title, img }: UserProfileProps) => {
  return (
    <UserProfileWrapper>
      <UserProfileAvatar>
        <ProfileImg src={img} />
      </UserProfileAvatar>
      <UserProfileInfo>
        <ProfileName>{name}</ProfileName>
        <ProfileTitle>{title}</ProfileTitle>
        <ProfileMetInfos>
          <MediaLikeMeta icon={<InstaIconSvg />} likeCount="31.2k" />
          <MediaLikeMeta icon={<TiktokIconSvg />} likeCount="34k" />
          <MediaLikeMeta icon={<PrintarestIconSvg />} likeCount="13k" />
          <MediaLikeMeta icon={<YoutubeIconSvg />} likeCount="1.1M" />
        </ProfileMetInfos>
      </UserProfileInfo>
    </UserProfileWrapper>
  );
});

export default UserProfile;
