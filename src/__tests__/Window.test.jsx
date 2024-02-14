import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { BrowserRouter } from "react-router-dom";
import CartWindow from "../components/CartWindow";

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

const handleMore = vi.fn();
const handleReduce = vi.fn();
const handleDelete = vi.fn();

const customRender = (value = "") => {
  return render(
    <ShoppingCartContext.Provider value={value}>
      <BrowserRouter>
        <CartWindow />
      </BrowserRouter>
    </ShoppingCartContext.Provider>
  );
};

describe("test context functions", () => {
  beforeEach(() => {
    customRender({
      added: initialAdded,
      subTotal: initialSubTotal,
      handleMore,
      handleReduce,
      handleDelete,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should be call function handleMore and handleReduce", async () => {
    const user = userEvent.setup();

    const increaseBtn = await screen.findByRole("button", { name: "+" });
    const minusBtn = await screen.findByRole("button", { name: "-" });
    const deleteBtn = await screen.findByRole("button", {
      name: "Remove Item",
    });

    await user.click(increaseBtn);
    await user.click(minusBtn);
    await user.click(deleteBtn);

    expect(handleMore).toHaveBeenCalled();
    expect(handleReduce).toHaveBeenCalled();
    expect(handleDelete).toHaveBeenCalledTimes(1);
  });

  it("is doesn't call functions", () => {
    expect(handleMore).not.toHaveBeenCalled();
    expect(handleReduce).not.toHaveBeenCalled();
    expect(handleDelete).not.toHaveBeenCalled();
  });
});
