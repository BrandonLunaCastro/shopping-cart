import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import cart from "../assets/svg/cart-shopping.svg";
import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

// styles
const Nav = styled.nav`
  background-color: transparent;
  display: flex;
  justify-content: space-around;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 3rem;
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
  }
  
  .active {
    color:#e0a76a;
  }

  a {
    text-decoration: none;
    color: #f8daba;
  }

  & > li:nth-child(1),
  & > li:nth-child(2) {
    position: relative;
    font-size: 1.2rem;
    font-weight: 600;
  }

  & > li:nth-child(1)::after,
  & > li:nth-child(2)::after {
    content: "";
    width: 0;
    height: 2px;
    position: absolute;
    bottom: -5px;
    left:0px;
    background-color: #F4DFC8;
    transition: 0.3s;
  } 
  & > li:nth-child(1)::after,
  & > li:nth-child(2)::after {
    content: "";
    width: 0;
    height: 2px;
    position: absolute;
    bottom: -5px;
    left:0px;
    background-color: #F4DFC8;
    transition: 0.3s;
  } 
  & > li:nth-child(1):hover:after,
  & > li:nth-child(2):hover:after {
    width: 100%;
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
  position: relative;
`;

const AmountElements = styled.span`
  position: absolute;
  background-color: #000000;
  color: #FAF6F0;
  line-height: 20px;
  border: 1px solid #000000;
  width: 20px;
  border-radius: 50%;
  text-align: center;
  font-size: 0.8rem;
`;

function NavBar() {
  const { added } = useContext(ShoppingCartContext);
  return (
    <>
      <Nav>
        <Logo src="./src/assets/images/logo.png" alt="logo"></Logo>
        <List>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }
              to="/store"
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              <Cart src={cart} alt="cart-icon"></Cart>
              <AmountElements>{added.length}</AmountElements>
            </NavLink>
          </li>
        </List>
      </Nav>
      <Detail id="detail">
        <Outlet></Outlet>
      </Detail>
    </>
  );
}

export default NavBar;
