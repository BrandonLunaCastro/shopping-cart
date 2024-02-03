import {  beforeEach, describe, expect, it } from "vitest";
import App from "../components/App";
import { render, screen } from "@testing-library/react";
import Home from "../components/Home";
import ShoppingProvider from "../context/ShoppingCartContext";

beforeEach(() => {
  render(
      <App /> ,{ wrapper: ShoppingProvider}
  );
});

describe("Should be render App", () => {
  it("should be render Home", () => {
    const title = screen.getByText(/You are in Home/i)
    expect(title).toBeInTheDocument();
  })
});
