import React from "react";
import { ButtonIcon, ButtonTag, ButtonText, IconButtonTag } from "./Styles";
import { ButtonProps } from "./Types";

export const Button = React.memo(({ text }: ButtonProps) => {
  return <ButtonTag>{text}</ButtonTag>;
});

export const IconButton = React.memo(
  ({ icon, text, isActive }: ButtonProps) => {
    return (
      <IconButtonTag isActive={isActive}>
        <ButtonIcon>{icon}</ButtonIcon>
        <ButtonText>{text}</ButtonText>
      </IconButtonTag>
    );
  },
);
