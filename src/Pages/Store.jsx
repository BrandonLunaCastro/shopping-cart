import { useContext, useEffect, useState } from "react";
import fetchData from "../services/fetchData";
import styled from "styled-components";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { verifyElement } from "../services/verifyElement";
import { Link, NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import useData from "../hooks/useData";

const Filter = styled.section`
  
`

const Cards = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  align-items: center;
  padding: 20px;
`;

const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid gray;
  padding-top: 10px;
  height: 280px;
  color: #555;
  gap: 10px;
  border-radius: 3px;
  overflow: hidden;
  

  & > a >img {
    width: 7rem;
    height: 7rem;
    object-fit: contain;
  }

  .title {
    text-align: center;
  }

  .add__cart {
    background-color: #000000;
    color: #ffff;
    border: none;
    font-size: 1.2rem;
    width: 100%;
    height: 4rem;
    cursor: pointer;
  }
`;
function Store() {
  const { added, addArticle } = useContext(ShoppingCartContext);
  const [search, setSearch] = useState("")

  const {data} = useData();

  
  const addToCart = (id) => {
    const selectElement = data.find((element) => element.id === id);
    selectElement.amount = 1;
    verifyElement(added, id) ? alert("is exist") : addArticle(selectElement);
  };

  const handleChange = (e) => {
    setSearch(e.target.value)
    
  }

  return (
    <>
      <Filter>
        <label htmlFor="search">Search article</label>
        <input type="search" name="search" id="search" onChange={handleChange} value={search}></input>
        <label htmlFor="category">Category</label>
        <select id="category">
          <option value="all">All</option>
          <option value=""></option>
        </select>
      </Filter>
      <Cards>
        {data &&
          data.map((el) => {
            return (
              <Card key={el.id} data-testid="articles-container">
                <p className="title">{el.title}</p>
                <Link to={`${el.id}`}>
                  <img src={el.image} alt={el.title}></img>
                </Link>
                <span>${el.price}</span>
                <button
                  className="add__cart"
                  onClick={() => addToCart(el.id)}
                  name="add"
                  data-testid={`btn-${el.id}`}
                >
                  Add to cart
                </button>
              </Card>
            );
          })}
      </Cards>
    </>
  );
}

export default Store;
