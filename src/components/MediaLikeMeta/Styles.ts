import styled from "styled-components";

export const MediaMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-right: 28px;
  :last-child {
    margin-right: 0;
  }
  @media (max-width: 768px) {
    margin-right: 16px;
  }
`;
export const MediaMetaIcon = styled.span`
  width: 24px;
  height: 24px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-right: 10px;
  @media (max-width: 768px) {
    margin-right: 6px;
  }
`;

export const MediaMetaText = styled.span`
  font-size: 15px;
  line-height: 22px;
  display: inline-block;
  font-weight: 400;
  color: #000000;
`;
