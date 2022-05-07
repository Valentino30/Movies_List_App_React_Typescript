import { fireEvent, render, screen } from "@testing-library/react";

import Input from ".";

describe("Input Component", () => {
  let input: HTMLInputElement;
  const onChange = jest.fn();

  it("Renders correctly", () => {
    render(
      <Input
        type="text"
        value="value"
        onChange={onChange}
        placeholder="Search Movie"
      />
    );
    input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  it("Calls onChange prop on input", () => {
    render(
      <Input
        type="text"
        value="value"
        onChange={onChange}
        placeholder="Search Movie"
      />
    );
    input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "a" } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
