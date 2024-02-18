import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "./page";

// This test is seeing if the Page component renders the heading "The Home Page" within an <h1> tag.
// This will not pass when I actually start building the app, but it's a good starting point.
test("Page", () => {
  render(<Page />);
  expect(
    screen.getByRole("heading", { level: 1, name: "The Home Page" }),
  ).toBeDefined();
});
