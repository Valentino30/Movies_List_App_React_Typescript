import { ReactNode } from "react";
import { StyledDiv } from "./styles";

type ContainerProps = {
  children: ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return <StyledDiv>{children}</StyledDiv>;
}
