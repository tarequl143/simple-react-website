import React from "react";
import { InfoBarWrapper } from "./Styles";
import { InfoBarProps } from "./Types";

const InfoBar = React.memo(({ info }: InfoBarProps) => {
  return <InfoBarWrapper>{info}</InfoBarWrapper>;
});

export default InfoBar;
