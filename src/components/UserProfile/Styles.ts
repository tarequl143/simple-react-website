import styled from "styled-components";

export const UserProfileWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const UserProfileAvatar = styled.div`
  width: 113px;
  height: 113px;
  border-radius: 50%;
  background-color: #e9f3fd;
  overflow: hidden;
  @media (max-width: 768px) {
    width: 90px;
    height: 90px;
  }
`;

export const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
export const UserProfileInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  @media (max-width: 768px) {
    margin-left: 0;
    text-align: center;
    justify-content: center;
    padding-top: 16px;
  }
`;

export const ProfileName = styled.h2`
  font-size: 27px;
  font-weight: 500;
  color: #000000;
  line-height: 1;
  margin: 0 0 8px 0;
  @media (max-width: 768px) {
    font-size: 21px;
  }
`;

export const ProfileTitle = styled.h4`
  font-size: 15px;
  font-weight: 400;
  color: #363b4a;
  line-height: 18px;
  margin: 0 0 20px 0;
  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const ProfileMetInfos = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
