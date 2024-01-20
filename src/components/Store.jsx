import { useEffect, useState } from "react";
import fetchData from "../services/fetchData";
import styled from "styled-components";

const Cards = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(250px, 1fr));
  grid-template-rows: repeat(auto-fill,minmax(250px, 1fr));
  gap: 20px;
  align-items: center;
`

const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid gray; 
  padding: 10px;
  min-height: 250px;
  & > img {
    width: 10rem;
    height: 10rem;
    object-fit: fill;
  }

  & > button {
    width: 100% ;
    height: 45px;
  }

`
function Store({setArticles, setAdded, added}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then(res => setData(res))
  },[])

  // console.log(data)
  
  const addToCart= (element) => {
    console.log(element)
    setArticles(articles => articles + 1)
    setAdded(prevState => [...prevState, element])
  }
  
  return (
    <>
      <h1>Main articles</h1>
      <Cards>
      { data && 
        data.map((el) => {
          
          return (
            <Card key={el.id}>                                                                                   
              <p>{el.title}</p>
              <img src={el.image} alt={el.title}></img>
              <span>${el.price}</span>
              <button onClick={() => addToCart(el)}>Add to cart</button>
            </Card>
          )
        })
      }
      </Cards>
    </>
  );
}

export default Store;
