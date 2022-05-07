import { render, screen } from "@testing-library/react";

import List from ".";
import ListItem from "../ListItem";
import placeholder from "../../assets/placeholder.jpeg";

describe("List Component", () => {
  let list: HTMLUListElement;
  let listItems: HTMLLIElement[];

  it("Renders correctly", () => {
    render(
      <List>
        <ListItem id="1" title="My Movie 1" year="2020" image={placeholder} />
        <ListItem id="2" title="My Movie 2" year="2021" image={placeholder} />
        <ListItem id="3" title="My Movie 3" year="2022" image={placeholder} />
      </List>
    );
    list = screen.getByRole("list");
    listItems = screen.getAllByRole("listitem");
    expect(list).toBeInTheDocument();
    expect(listItems).toHaveLength(3);
  });
});
