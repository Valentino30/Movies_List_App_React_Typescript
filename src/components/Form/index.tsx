import { FormEventHandler, ReactNode } from "react";
import { StyledForm } from "./styles";

type HeaderProps = {
  children: ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
};

export default function Form({ children, onSubmit }: HeaderProps) {
  return (
    <StyledForm onSubmit={onSubmit} aria-label="form">
      {children}
    </StyledForm>
  );
}
