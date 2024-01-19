import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

// styles
  const Nav = styled.nav`
    background-color: aliceblue;
    color: red;
    display: flex;
    justify-content: space-around;
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

function NavBar() {
  return (
    <>
      <Nav>
        <p>Shop</p>
        <List>  
          <li>
            <NavLink  to="/">Home</NavLink>
          </li>
          <li>
            <NavLink   to="/store">Store</NavLink>
          </li>
        </List>
      </Nav>
      <div id="detail">
          <Outlet></Outlet>
      </div>
    </>
  );
}

export default NavBar;
