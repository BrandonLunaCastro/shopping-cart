import { useEffect, useState } from "react";
import fetchData from "../services/fetchData";
import styled from "styled-components";

const Cards = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(250px, 1fr));
  grid-template-rows: repeat(auto-fill,minmax(250px, 1fr));
  gap: 20px;
`

const Card = styled.article`
  display: flex;
  flex-direction: column;
  border: 1px solid gray; 
`
function Store() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then(res => setData(res))
  },[])

  console.log(data)
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
              <button>Add do cart</button>
            </Card>
          )
        })
      }
      </Cards>
    </>
  );
}

export default Store;
