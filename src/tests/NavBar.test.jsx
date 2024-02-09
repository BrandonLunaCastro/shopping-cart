import {
  afterEach,
  beforeEach,
  describe,
  expect,
  expectTypeOf,
  it,
  should,
  vi,
} from "vitest";
import NavBar from "../components/NavBar";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShoppingProvider, { ShoppingCartContext } from "../context/ShoppingCartContext";
import { BrowserRouter } from "react-router-dom";

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

describe("component <NavBar />", () => {

  const userInteraction = async () => {
    const user = userEvent.setup();
    const buttonCart = screen.getByAltText("cart-icon");
    user.click(buttonCart);
  }

  it("should be show a links of page", () => {
    render(
      <ShoppingProvider>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </ShoppingProvider>
    )
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Store")).toBeInTheDocument();
  })

  it("should be render a one articles", async () => {
    render(
        <ShoppingCartContext.Provider value={{added: initialAdded, subTotal: initialSubTotal}}>
            <BrowserRouter>
              <NavBar />
            </BrowserRouter>
        </ShoppingCartContext.Provider>
    )
    
    userInteraction();
    const articles = await screen.findAllByTestId("article-cart");
    expect(articles.length).toBe(1);
  });

  it("does not render any article",async () => {
    render(
      <ShoppingProvider>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </ShoppingProvider>
    )
    userInteraction();
    expect(await screen.findByText(/the actual cart is empty/i)).toBeInTheDocument();
  })

/*   it("should be increase the amount of article", async () => {
    userInteraction();
    const user = userEvent.setup();
    const buttonIncrease = await screen.findByRole("button", {name: "+" })
    await user.click(buttonIncrease)

    expect(await screen.find)
  })
 */
});
