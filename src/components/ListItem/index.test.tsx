import { render, screen } from "@testing-library/react";

import ListItem from ".";
import placeholder from "../../assets/placeholder.jpeg";

describe("ListItem Component", () => {
  let listItem: HTMLLIElement;

  it("Renders correctly", () => {
    render(
      <ListItem id="1" title="My Movie" year="2022" image={placeholder} />
    );
    listItem = screen.getByRole("listitem");
    expect(listItem).toBeInTheDocument();
  });
});
