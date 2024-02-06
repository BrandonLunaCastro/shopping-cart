import {  beforeEach, describe, expect, it, vi } from "vitest";
import App from "../components/App";
import { render, screen } from "@testing-library/react";
import ShoppingProvider from "../context/ShoppingCartContext";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
  render(
      <App /> ,{ wrapper: ShoppingProvider}
  );
});

describe("Should be render App", () => {
  it("should be render first a Home component", () => {
    const title = screen.getByText(/You are in Home/i)
    expect(title).toBeInTheDocument();
  })

  it("should be render Store component when link is clicked", async () => {
    const user = userEvent.setup();
    const storeLink = screen.getByText(/Store/i);

    await user.click(storeLink)
    expect(screen.getByRole("heading", {name: "Main articles" }))
  })

  // it("should be add article to cart", async () => {
  //   const user = userEvent.setup();
  //   const storeLink = screen.getByText(/Store/i);

  //   await user.click(storeLink);
    
  //   const button = await screen.findByTestId("btn-2");
  //   await user.click(button);

  //   const cartText = screen.getByRole("heading", {name: /cart is empty/i} );}
  //   expect(cartText).toMatchSnapshot();
  //   const addedArticles = await screen.findAllByTestId("article-cart");
  //   expect(addedArticles.length).toBe(1);
  //   expect(cartText).toBeInTheDocument();
  // })

  it("should  be open the cart", async () => {
    const user = userEvent.setup();
    const cartBtn = await screen.findByAltText("cart-icon");
    await user.click(cartBtn);                     
    expect(screen.getByText(/the actual cart is empty/i)).toMatchSnapshot();
  })

  it("should be add article", async () => {
    const user = userEvent.setup();
    // const mockOnClick = vi.fn();
    // const button = await screen.findByRole("button", {name: "add"});
    const button = await screen.findByTestId("btn-2")
    await user.click(button);
    
    user.click(screen.getByAltText("cart-icon"));
    expect(screen.getAllByText(/mens casual/i))
  })

  it("should be add article on view of Snapshot", async () => {
    const user = userEvent.setup();
    // const mockOnClick = vi.fn();
    // const button = await screen.findByRole("button", {name: "add"});
    const button = await screen.findByTestId("btn-2")
    await user.click(button);
    
    user.click(screen.getByAltText("cart-icon"));
    expect(screen.getAllByText(/mens casual/i)).toMatchSnapshot()
  })

});
