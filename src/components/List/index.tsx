import { ReactNode } from "react";

import { StyledUl } from "./styles";

type ListProps = {
  children: ReactNode[];
};

export default function List({ children }: ListProps) {
  return <StyledUl>{children}</StyledUl>;
}
