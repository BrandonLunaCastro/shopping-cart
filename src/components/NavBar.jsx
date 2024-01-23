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
    max-width: 500px;
    max-height: 500px;
    overflow-y: scroll;
    border: 1px solid gray;
    position: fixed;
    background-color: #333;
    color: white;
    right: 0;
    top: 3rem;
    padding: 15px;
  `
  const ElementCart = styled.figure`
    display: flex;
    flex-direction: column;
    & > div > img {
      width: 10rem;
      height: 10rem;

    }
    border: 1px solid white;
    gap: 15px;
  `

  const AmountElements = styled.span`
    background-color: #000;
    padding: 5px;
    color: white;
    border-radius: 100%;
    font-size: 1rem;
    position: absolute;
  `


function NavBar({amount, added}) {
  const [ cartOpen, setCart ] = useState(false);
  
  const handleCart = () => {
    !cartOpen ? setCart(true) : setCart(false);
  }

  const subTotal = added.reduce((acu,current) => {
    return acu+=current.price
  },0); 

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
            <AmountElements>{amount}</AmountElements>
          </li>
        </List>
      </Nav>
      { cartOpen && 
        (
          <Window>
            {
              added.lenght !== 0 && 
              added.map(art => {
                return (
                  <ElementCart key={art.id}>
                    <div>
                      <img src={art.image}></img>
                      <p>{art.title}</p>
                      <p>Total: {art.price}</p>
                    </div>
                    <div>
                      <button>+</button>
                      <button>-</button>
                    </div>
                  </ElementCart>
                
                )
              })
            }
            {added.length !== 0 && 
              <p>SubTotal: ${subTotal}</p>
            }
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
