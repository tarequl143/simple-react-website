import styled from "styled-components";

export const HomePageWrapper = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 40px;
  padding-top: 65px;
  @media (max-width: 1024px) {
    padding-top: 60px;
  }
  @media (max-width: 768px) {
    padding-top: 56px;
  }
`;
export const HomePageInnerContent = styled.div`
  padding: 0 16px;
  width: 100%;
`;
export const HomeProfileWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px 32px 20px;
  @media (max-width: 768px) {
    padding: 24px 0;
  }
`;

export const HomeMediaTabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  @media (max-width: 480px) {
    justify-content: space-between;
    width: 100%;
  }
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;
export const HomeMediaButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 24px 0 30px;
  > button {
    margin-right: 16px;
    :last-child {
      margin-right: 0;
    }
  }
  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;

export const HomePagePostsWrapper = styled.div`
  width: 100%;
  margin-bottom: 40px;
  @media (max-width: 480px) {
    > div {
      margin: 0 -1px;
    }
  }
`;
export const NoResult = styled.div`
  width: 100%;
  padding: 16px;
  font-size: 15px;
  line-height: 22px;
  font-weight: 400;
  color: #363b4a;
  margin: 60px 0 0 0;
  text-align: center;
`;
