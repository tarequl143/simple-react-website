import styled from "styled-components";

export const ButtonTag = styled.button`
  padding: 9px 20px;
  line-height: 18px;
  background-color: #3354ff;
  color: #ffffff;
  border-radius: 2px;
  border: 1px solid #3354ff;
  text-transform: capitalize;
  cursor: pointer;
  :focus {
    outline: none;
  }
  @media (max-width: 768px) {
    padding: 7px 16px;
  }
`;

export const ButtonIcon = styled.span`
  width: 24px;
  height: 24px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-right: 4px;
`;

export const ButtonText = styled.span`
  font-size: 13px;
  line-height: 16px;
  display: inline-block;
  font-weight: 500;
  text-transform: capitalize;
`;

export const IconButtonTag = styled.button<{ isActive?: boolean }>`
  padding: 9px 16px;
  background-color: transparent;
  border: 1px solid ${(props) => (props.isActive ? "#dcecfb" : "#f1f2f3")};
  border-radius: 32px;
  color: #000000;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  box-shadow: ${(props) =>
    props.isActive ? "0px 5px 15px rgba(51, 84, 255, 0.06)" : "none"};
  ${ButtonText} {
    color: ${(props) => (props.isActive ? "#3354ff" : "#000000")};
  }
  ${ButtonIcon} > svg {
    path {
      fill: ${(props) => (props.isActive ? "#3354ff" : "#000000")};
    }
  }
  &:hover {
    box-shadow: 0px 5px 15px rgba(51, 84, 255, 0.06);
    border-color: #dcecfb;
    ${ButtonIcon} {
      > svg {
        path {
          fill: #3354ff;
        }
      }
    }
    ${ButtonText} {
      color: #3354ff;
    }
  }
`;
