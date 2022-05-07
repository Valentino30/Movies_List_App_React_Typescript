import { ChangeEventHandler } from "react";

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
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
