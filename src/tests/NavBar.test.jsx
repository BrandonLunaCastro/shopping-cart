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
import ShoppingProvider from "../context/ShoppingCartContext";
import App from "../components/App";


vi.mock("../context/ShoppingCartContext", () => {
  return {
    default: ShoppingProvider
    // added: [
    //   {
    //     id: 1,
    //     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    //     price: 109.95,
    //     description:
    //       "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    //     category: "men's clothing",
    //     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    //     rating: {
    //       rate: 3.9,
    //       count: 120,
    //     },
    //     mount: 1,
    //   },
    //   {
    //     id: 2,
    //     title: "Mens Casual Premium Slim Fit T-Shirts ",
    //     price: 22.3,
    //     description:
    //       "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    //     category: "men's clothing",
    //     image:
    //       "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    //     rating: {
    //       rate: 4.1,
    //       count: 259,
    //     },
    //     mount: 1,
    //   },
    // ]
  }
  
});

describe("component <NavBar />", () => {
  // const mockShoppignCartContext = {
  //   added: [
  //     {
  //       id: 1,
  //       title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //       price: 109.95,
  //       description:
  //         "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //       category: "men's clothing",
  //       image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //       rating: {
  //         rate: 3.9,
  //         count: 120,
  //       },
  //       mount: 1,
  //     },
  //     {
  //       id: 2,
  //       title: "Mens Casual Premium Slim Fit T-Shirts ",
  //       price: 22.3,
  //       description:
  //         "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
  //       category: "men's clothing",
  //       image:
  //         "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  //       rating: {
  //         rate: 4.1,
  //         count: 259,
  //       },
  //       mount: 1,
  //     },
  //   ],
  // };

  beforeEach(() => {
    render(
      <ShoppingProvider>
        <App>
          <NavBar/>
        </App>
      </ShoppingProvider>
    );
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should be render a articles", async () => {
    const user = userEvent.setup();
    const buttonCart = screen.getByAltText("cart-icon");
    await user.click(buttonCart);

    const first = await screen.findAllByTestId("article-card");
    expect(first.length).toBe(2);
  });

  // it("should be show store link of navbar", () => {
  //   const link = screen.getByText("Store")
  //   expect(link).toBeInTheDocument();
  // })

  // it("should be show home link of navbar", () => {
  //   const homeLink = screen.getByRole("link", {name: /home/i })
  //   expect(homeLink).toBeInTheDocument();
  // })

  // it("testing number of articles", async () => {
  //   const user = userEvent.setup();
  //   const cartIcon = screen.getByAltText("cart-icon");

  //   await user.click(cartIcon);

  //   const text = screen.getByText("The actual Cart is emptyThe actual Cart is empty")
  //   expect(text).toBeInTheDocument();
  // })
});
