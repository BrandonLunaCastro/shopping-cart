import { getByRole, render, screen } from "@testing-library/react";
import Home from "../components/Home";
import { beforeEach, describe, expect, it } from "vitest";

describe("should be render first a Home", () => {
  beforeEach(() => {
    render(<Home />);
  })

  it("It should by an image background" , () => {
    const image = screen.getByTestId("bg-image")
    expect(image).toBeInTheDocument();
  })

});
