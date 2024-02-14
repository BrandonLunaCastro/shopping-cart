import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import Store from "../components/Store";
import userEvent from "@testing-library/user-event";
import ShoppingProvider from "../context/ShoppingCartContext";

describe("should by show data articles", () => {
  beforeEach(() => {
    render(
      <ShoppingProvider>
        <Store />
      </ShoppingProvider>
    );
  });

  describe("should be render Store component", () => {
    it("should be show h1", () => {
      const title = screen.getByRole("heading", { name: "Main articles" });
      expect(title).toBeInTheDocument();
    });

    it("should be have twenty articles", async () => {
      const container = await screen.findAllByTestId("articles-container");
      expect(container.length).toBe(20)
    });

    it.skip("should be add article to cart", async () => {
      const user = userEvent.setup();
      const firstButton = screen.findByLabelText(/Add to cart/i);
      await user.click(firstButton);
    });
  });
});
