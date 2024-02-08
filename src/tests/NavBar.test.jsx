import { beforeEach, describe, expect, expectTypeOf, it, vi } from "vitest";
import NavBar from "../components/NavBar";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShoppingProvider from "../context/ShoppingCartContext";
import App from "../components/App";

  describe("component <NavBar />", () => {                                                                                        

      vi.mock("../context/ShoppingCartContext", async(importOriginal) => {
        const mod = await importOriginal();
        return {
          ...mod,
          added : [{title: "mens casual", price: 20, category: "clothes"}, {title: "clock pocket", price: 80, category: "jewelry"}]
        }
      })

      beforeEach(() => {
        render(
          <ShoppingProvider >
            <App>
              <NavBar />      
            </App>
          </ShoppingProvider>
        );
      })

      it("should be render a articles", async () => {
        const first = await screen.findAllByTestId("article-card")
        expect(first.length).toBe(2);
      })

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
