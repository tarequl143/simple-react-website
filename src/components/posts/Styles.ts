import styled from "styled-components";

export const PostsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

export const PostsDate = styled.h6`
  font-size: 13px;
  line-height: 22px;
  font-weight: 400;
  color: #000000;
  text-align: left;
  width: 100%;
  padding: 0 8px;
  span {
    color: #767b8a;
  }
  @media (max-width: 480px) {
    padding: 0 1px;
    margin-bottom: 8px;
  }
`;
export const AllPosts = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
