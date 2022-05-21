import styled from "styled-components";

export const Container = styled.div`
  width: 1240px;
  max-width: 100%;
  position: relative;
  padding: 10px 0;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLeftContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  div:last-child {
    margin-left: 20px;
  }
  @media (max-width: 1024px) {
    .search-bar {
      display: none;
    }
  }
`;
export const HeaderRightContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 1024px) {
    flex: 3;
  }
`;

export const MainMenuContent = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  > a {
    margin-right: 32px;
    :last-child {
      margin-right: 0;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const AuthMenuContent = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 48px;
  button {
    margin-left: 16px;
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  padding: 0 16px;
  position: fixed;
  left: 0;
  top: 0;
  background: #ffffff;
  z-index: 99;
  border: 1px solid #dcecfb;
`;

export const HamburgerMenu = styled.div`
  display: none;
  margin-right: 16px;
  @media (max-width: 768px) {
    display: inline-block;
  }
`;
