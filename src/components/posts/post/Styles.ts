import styled from "styled-components";

export const PostWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 25%;
  padding: 8px;
  box-sizing: border-box;
  height: 300px;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  @media (max-width: 1024px) {
    height: 220px;
  }
  @media (max-width: 768px) {
    width: 33.3333334%;
  }
  @media (max-width: 640px) {
    height: 190px;
  }
  @media (max-width: 480px) {
    height: 120px;
    padding: 1px;
  }
`;

export const PostImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 4px;
`;

export const PostImgWrapper = styled.div`
  position: absolute;
  left: 8px;
  top: 8px;
  right: 8px;
  bottom: 8px;
  border-radius: 4px;
  @media (max-width: 480px) {
    left: 1px;
    top: 1px;
    right: 1px;
    bottom: 1px;
  }
`;

export const PostVideoIcon = styled.span`
  width: 30px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
