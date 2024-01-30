import { getByRole, render, screen } from "@testing-library/react";
import Home from "../components/Home";
import { describe, expect, it } from "vitest";

describe("Home component", () => {
  it("I should correct render", () => {
    render(<Home />);
  });
  it("It should by an image background" , () => {
    render(<Home />);
    const image = screen.getByTestId("bg-image")
    expect(image).toBeInTheDocument();
  })
});
