import { LoadingIcon, LoadingText, LoadingWrapper } from "./Styles";
import { LoadingProps } from "./Types";

const Loading = ({ text, icon }: LoadingProps) => {
  return (
    <LoadingWrapper>
      <LoadingIcon>{icon}</LoadingIcon>
      <LoadingText>{text}</LoadingText>
    </LoadingWrapper>
  );
};

export default Loading;
