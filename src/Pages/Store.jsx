import { useContext, useEffect, useState } from "react";
import fetchData from "../services/fetchData";
import styled from "styled-components";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { filterArticle } from "../services/filterArticle";
import Cards from "../components/Cards";
import { searchArticle } from "../services/searchArticle";

const Filter = styled.section`
  display: flex;
  justify-content: center;
  gap: 1rem;
  & > div > * {
    margin: 2px;
  } 
`;

function Store() {
  const { setData, data } = useContext(ShoppingCartContext);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState([]);
  const [filter, setFiltered] = useState([]);

  const baseURL = "https://fakestoreapi.com/products/";

  useEffect(() => {
    fetchData(baseURL).then((res) => setData(res));
  }, [setData]);

  useEffect(() => {
    fetchData("https://fakestoreapi.com/products/categories").then((res) =>
      setCategory(res)
    );
  }, [setCategory]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    const actualSearch = searchArticle(data, search);
    setFiltered(actualSearch);
  };

  const handleSelect = (e) => {
    const selection = filterArticle(data, e.target.value);
    setFiltered(selection);
  };
  return (
    <>
      <Filter>
        <div>
          <label htmlFor="search">Search article</label>
          <input
            type="search"
            name="search"
            id="search"
            onChange={handleSearch}
            value={search}
          ></input>
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <select id="category" onChange={handleSelect}>
            <option value="all">All</option>
            {category.map((element) => {
              return (
                <option value={element} key={element}>
                  {element}
                </option>
              );
            })}
          </select>
        </div>
      </Filter>
      <Cards
        dataFilter={!search && filter.length < 1 ? data : filter}
        search={search}
      />
    </>
  );
}
export default Store;
