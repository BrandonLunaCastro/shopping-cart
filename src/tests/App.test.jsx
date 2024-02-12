import {  beforeEach, describe, expect, it, vi } from "vitest";
import App from "../components/App";
import {  act, render, screen } from "@testing-library/react";
import ShoppingProvider from "../context/ShoppingCartContext";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
  act(() => {
    render(
      <ShoppingProvider>
        <App /> 
      </ShoppingProvider>
    );
  })
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
    expect(await screen.findByRole("heading", {name: "Main articles" }))
  })

  it("should  be open the cart", async () => {
    const user = userEvent.setup();
    const cartBtn = await screen.findByAltText("cart-icon");
    await user.click(cartBtn);                     
    expect(await screen.findByText(/the actual cart is empty/i)).toMatchSnapshot();
  })
  
  it("should be length cart items 1", async () => {
    const user = userEvent.setup();
    const button = await screen.findByTestId("btn-3");
    
    await user.click(button);
    user.click(screen.getByAltText("cart-icon"));
    
    const articles = await screen.findAllByTestId("article-cart"); 
    expect(articles.length).toBe(1);
  });
  

});
