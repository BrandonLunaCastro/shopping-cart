import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import cart from "../assets/svg/cart-shopping.svg"
import { useState } from "react";


// styles
  const Nav = styled.nav`
    background-color: #F4F4F2 ;
    color: red;
    display: flex;
    justify-content: space-around;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 3rem;
    background:transparent; 
    backdrop-filter: blur(1rem); 
    border-bottom: 1px solid #E8E8E8;
  `
  const List = styled.nav`
    display: inherit;
    justify-content: center;
    align-items: center;
    gap: 20px;
    & > li {
      list-style-type: none;    
      text-decoration: none;
    }
  `
  const Logo = styled.img`
      width: 2.5rem;  
      height: 2.5rem;
      margin: auto 0 ;
  `
  const Detail = styled.section`
      margin-top: 80px; 
  `   

  const Cart = styled.img`
    width: 2rem;
    height: 2rem;
    cursor: pointer ;
  `

  const Window = styled.article`
    width: 500px;
    height: 500px;
    border: 1px solid gray;
    position: fixed;
    background-color: #333;
    color: white;
    right: 0;
    top: 3rem;
  `

function NavBar({mount, added}) {
  const [ cartOpen, setCart ] = useState(false);
  console.log(added)
  const handleCart = () => {
    !cartOpen ? setCart(true) : setCart(false);
  }

  return (
    <>
      <Nav>
        <Logo src="./src/assets/images/logo.png" alt="logo" ></Logo>
        <List>  
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/store">Store</NavLink>
          </li>
          <li>
            <Cart src={cart} alt="cart-icon" onClick={handleCart}></Cart>
            <span>{mount}</span>
          </li>
        </List>
      </Nav>
      { cartOpen && 
        (
          <Window>
            <p>catntidad de articulos = {mount}</p>
            
          </Window>
        )
      }
      <Detail id="detail">
          <Outlet></Outlet>
      </Detail>
    </>
  );
}

export default NavBar;
