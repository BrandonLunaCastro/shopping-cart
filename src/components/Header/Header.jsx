import React from "react";
import { NavLink } from "react-router-dom";
// import Router from "../../router/router";

function Header() {
  return (
    <header>
      <p>Shop</p>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/store">Store</NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
