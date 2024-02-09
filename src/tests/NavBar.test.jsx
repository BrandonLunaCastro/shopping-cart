import {
  afterEach,
  beforeEach,
  describe,
  expect,
  expectTypeOf,
  it,
  vi,
} from "vitest";
import NavBar from "../components/NavBar";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../components/App";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { BrowserRouter } from "react-router-dom";

beforeEach(() => {
  const initialAdded = [
    {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "rating": {
        "rate": 3.9,
        "count": 120
      },
      "amount": 1,
    }
  ]
  
  const initialSubTotal = 109.95 

  render(
    <ShoppingCartContext.Provider value={{added: initialAdded, subTotal: initialSubTotal}}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
    </ShoppingCartContext.Provider>
  )
})

describe("component <NavBar />", () => {
  it("should be render a articles", async () => {
    const user = userEvent.setup();
    const buttonCart = screen.getByAltText("cart-icon");

    user.click(buttonCart);
    
    const articles = await screen.findAllByTestId("article-cart");
    expect(articles.length).toBe(1);
  });
});
