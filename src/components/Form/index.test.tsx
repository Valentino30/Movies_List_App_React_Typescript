import { fireEvent, render, screen } from "@testing-library/react";

import Form from ".";
import Input from "../Input";

describe("Form Component", () => {
  let form: HTMLFormElement;
  const onSubmit = jest.fn();
  const onChange = jest.fn();

  it("Renders correctly", () => {
    render(
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          value="value"
          onChange={onChange}
          placeholder="Search Movie"
        />
      </Form>
    );
    form = screen.getByRole("form");
    expect(form).toBeInTheDocument();
  });

  it("Calls onSubmit prop when clicked", () => {
    render(
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          value="value"
          onChange={onChange}
          placeholder="Search Movie"
        />
      </Form>
    );
    form = screen.getByRole("form");
    fireEvent.submit(form);
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
