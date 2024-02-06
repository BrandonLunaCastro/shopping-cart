import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import cart from "../assets/svg/cart-shopping.svg";
import { useContext, useState } from "react";
import getPrice from "../services/getPrice";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

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
`;
const ElementCart = styled.figure`
  display: flex;
  flex-direction: column;
  & > div > img {
    width: 10rem;
    height: 10rem;
  }
  border: 1px solid white;
  gap: 15px;
`;

const AmountElements = styled.span`
  background-color: #000;
  padding: 5px;
  color: white;
  border-radius: 100%;
  font-size: 1rem;
  position: absolute;
`;

const Delete = styled.button`
  background-color: crimson;
  color: white;
  width: 8rem;
  height: 3rem;
`

function NavBar() {
  const {added, handleMore, handleReduce, handleDelete, subTotal} = useContext(ShoppingCartContext);
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
      {cartOpen && (
        <Window>
          {added.length !== 0 ? (
            added.map((art) => {
              return (
                <ElementCart key={art.id} datatest-id="article-cart" >
                  <div>
                    <img src={art.image}></img>
                    <p>{art.title}</p>
                    <p>${art.price.toFixed(2)}</p>
                  </div> 
                  <div>
                    <button onClick={() => handleMore(art.id)}>+</button>
                    <button onClick={() => handleReduce(art.id)}>-</button>
                    <p>Amount: {art.mount} </p>
                  </div>
                  <Delete onClick={() => handleDelete(art.id)} >Remove Item</Delete>
                </ElementCart>
              );
            })
          ) : (
            <p>The actual Cart is empty</p>
          )}
          {added.length !== 0 && <p>SubTotal: ${subTotal}</p>}
        </Window>
      )}
      <Detail id="detail">
        <Outlet></Outlet>
      </Detail>
    </>
  );
}

export default NavBar;
