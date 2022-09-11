import { render, screen, within } from "@testing-library/react";
import IndexPage from "pages";
import { expect, test } from "vitest";

test("Index", () => {
  render(<IndexPage />);
  const main = within(screen.getByRole("main"));
  expect(main.getByText("Hello World")).toBeInTheDocument();
});
