import styled from "styled-components";

export const MediaMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;
  @media (max-width: 480px) {
    padding: 12px 8px;
    &:last-child {
      padding-right: 0;
    }
    &:first-child {
      padding-left: 0;
    }
  }
`;

export const MediaMetaText = styled.span`
  font-size: 15px;
  line-height: 18px;
  display: inline-block;
  font-weight: 500;
  color: #000000;
`;

export const MediaCount = styled.span`
  font-size: 13px;
  line-height: 20px;
  font-weight: 400;
  color: #767b8a;
  margin-left: 8px;
  @media (max-width: 768px) {
    display: none;
  }
`;
