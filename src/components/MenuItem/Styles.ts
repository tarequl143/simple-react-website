import styled from "styled-components";

export const MenuItemTag = styled.a<{ isActive?: boolean }>`
  line-height: 18px;
  color: ${(props) => (props.isActive ? "#3354FF" : "#000000")};
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.01em;
  text-transform: capitalize;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #3354ff;
  }
`;
