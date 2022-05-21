import styled from "styled-components";

export const SearchWrapper = styled.div<{
  width?: string;
  height?: string;
  background?: string;
}>`
  width: ${(props) => (props.width ? props.width : "450px")};
  height: ${(props) => (props.height ? props.height : "45px")};
  position: relative;
  border-radius: 4px;
  max-width: 100%;
  background-color: ${(props) =>
    props.background === "gray" ? "#F9FAFA" : "#ffffff"};
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid #e3e4e8;
  border-radius: 4px;
  padding: 10px 32px 10px 16px;
  background-color: transparent;
  font-size: 15px;
  font-weight: 400;
  color: #000000;
  &:focus {
    border-color: #3354ff;
    outline: none;
  }
`;

export const SearchSubmit = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
