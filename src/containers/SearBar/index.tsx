import { ChangeEventHandler, FormEventHandler } from "react";

import Form from "../../components/Form";
import Input from "../../components/Input";

type SearchBarProps = {
  onChange: ChangeEventHandler<HTMLInputElement>;
  onSubmit: FormEventHandler<HTMLFormElement>;
  keyword: string;
};

export default function SearchBar({
  onChange,
  onSubmit,
  keyword,
}: SearchBarProps) {
  return (
    <Form onSubmit={onSubmit}>
      <Input
        type="text"
        value={keyword}
        onChange={onChange}
        placeholder="Search Movie"
      />
    </Form>
  );
}
