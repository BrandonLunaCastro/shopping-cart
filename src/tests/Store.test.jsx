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

    it("should be have twenty buttons", async () => {
      const buttons = await screen.findAllByRole("button", {name:"Add to cart"})
      expect(buttons.length).toBe(20)
    });

    it("should be found determine article", async () => {
      const articleItemOne = await screen.findByTestId("article-item-1");
      expect(articleItemOne).toBeInTheDocument();

      const articleItemTen = await screen.findByTestId("article-item-10");
      expect(articleItemTen).toBeInTheDocument();
    });

    it("should be add article to cart",async () => {
      const user = userEvent.setup();
      const firstButton = screen.findByLabelText(/Add to cart/i);
      await user.click(firstButton);
    });

  });
});
