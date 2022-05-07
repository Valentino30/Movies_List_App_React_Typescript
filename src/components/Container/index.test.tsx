import { render, screen } from "@testing-library/react";

import Container from ".";
import Header from "../Header";

describe("Container Component", () => {
  let text: HTMLParagraphElement;

  it("Renders correctly", () => {
    render(
      <Container>
        <Header title="Read Me" />
      </Container>
    );
    text = screen.getByText("Read Me");
    expect(text).toBeInTheDocument();
  });
});
