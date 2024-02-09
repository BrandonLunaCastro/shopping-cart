import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import cart from "../assets/svg/cart-shopping.svg";
import { useContext, useState } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import CartWindow from "./CartWindow";

// styles
const Nav = styled.nav`
  background-color: #f4f4f2;
  color: red;
  display: flex;
  justify-content: space-around;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 3rem;
  background: transparent;
  backdrop-filter: blur(1rem);
  border-bottom: 1px solid #e8e8e8;
`;
const List = styled.nav`
  display: inherit;
  justify-content: center;
  align-items: center;
  gap: 20px;
  & > li {
    list-style-type: none;
    text-decoration: none;
  }
`;
const Logo = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin: auto 0;
`;
const Detail = styled.section`
  margin-top: 80px;
`;

const Cart = styled.img`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;

const AmountElements = styled.span`
  background-color: #000;
  padding: 5px;
  color: white;
  border-radius: 100%;
  font-size: 1rem;
  position: absolute;
`;

function NavBar() {
  const { added } = useContext(ShoppingCartContext);
  const [cartOpen, setCart] = useState(false);
  const handleCart = () => setCart(!cartOpen);

  return (
    <>
      <Nav>
        <Logo src="./src/assets/images/logo.png" alt="logo"></Logo>
        <List>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/store">Store</NavLink>
          </li>
          <li>
            <Cart src={cart} alt="cart-icon" onClick={handleCart}></Cart>
            <AmountElements>{added.length}</AmountElements>
          </li>
        </List>
      </Nav>
      {cartOpen && <CartWindow />}
      <Detail id="detail">
        <Outlet></Outlet>
      </Detail>
    </>
  );
}

export default NavBar;
