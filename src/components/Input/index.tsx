import { ChangeEventHandler } from "react";
import { StyledInput } from "./styles";

type InputProps = {
  type: string;
  value: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export default function Input({
  placeholder,
  onChange,
  value,
  type,
}: InputProps) {
  return (
    <StyledInput
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
