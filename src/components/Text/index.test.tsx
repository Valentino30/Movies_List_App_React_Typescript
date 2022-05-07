import { render, screen } from "@testing-library/react";

import Text from ".";

describe("Text Component", () => {
  let text: HTMLParagraphElement;

  it("Renders correctly", () => {
    render(<Text title="Read Me" />);
    text = screen.getByText("Read Me");
    expect(text).toBeInTheDocument();
  });
});
