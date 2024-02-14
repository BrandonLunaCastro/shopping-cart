import { describe, expect, it, vi } from "vitest";
import NavBar from "../components/NavBar";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShoppingProvider, {
  ShoppingCartContext,
} from "../context/ShoppingCartContext";
import { BrowserRouter } from "react-router-dom";

let initialAdded = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
    mount: 1,
  },
];

let initialSubTotal = 109.95;

const userInteraction = async () => {
  const user = userEvent.setup();
  const buttonCart = screen.getByAltText("cart-icon");
  user.click(buttonCart);
};

const customRender = (value = "") => {
  return render(
    <ShoppingCartContext.Provider value={value}>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </ShoppingCartContext.Provider>
  );
};

describe("component <NavBar />", () => {
  it("should be show a links of page", () => {
    render(
      <ShoppingProvider>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </ShoppingProvider>
    );
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Store")).toBeInTheDocument();
  });

  it("should be render a one articles", async () => {
    customRender({ added: initialAdded, subTotal: initialSubTotal });
    userInteraction();
    const articles = await screen.findAllByTestId("article-cart");
    expect(articles.length).toBe(1);
  });

  it("does not render any article", async () => {
    render(
      <ShoppingProvider>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </ShoppingProvider>
    );
    userInteraction();
    expect(
      await screen.findByText(/the actual cart is empty/i)
    ).toBeInTheDocument();
  });
});

describe("test context functions", () => {
  it("should be call function handleMore and handleReduce", async () => {
    const user = userEvent.setup();
    const handleMore = vi.fn();
    const handleReduce = vi.fn();
    const handleDelete = vi.fn()

    customRender({
      added: initialAdded,
      subTotal: initialSubTotal,
      handleMore,
      handleReduce,
      handleDelete
    });
    userInteraction();

    const increaseBtn = await screen.findByRole("button", { name: "+" });
    const minusBtn = await screen.findByRole("button", { name: "-" });
    const deleteBtn = await screen.findByRole("button", {name: "" })


    await user.click(minusBtn);
    await user.click(increaseBtn);

    expect(handleMore).toHaveBeenCalled();
    expect(handleReduce).toHaveBeenCalled();

    await user.click()

  });

  it("is doesn't call functions", async () => {
    const handleMore = vi.fn();
    const handleReduce = vi.fn();

    customRender({
      added: initialAdded,
      subTotal: initialSubTotal,
      handleMore,
    });
    userInteraction();

    expect(handleMore).not.toHaveBeenCalled();
    expect(handleReduce).not.toHaveBeenCalled();
  });
});
