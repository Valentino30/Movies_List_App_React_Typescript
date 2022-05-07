import { StyledHeader } from "./styles";

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  return <StyledHeader>{title}</StyledHeader>;
}
