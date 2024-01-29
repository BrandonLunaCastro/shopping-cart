import { useContext, useEffect } from "react";
import fetchData from "../services/fetchData";
import styled from "styled-components";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

const Cards = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  align-items: center;        
`;

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
    width: 100%;
    height: 45px;
  }
`;
function Store() {
  // const [data, setData] = useState([]);
  //{ setArticles, setAdded, added, setData, data }
  
  const {setAdded, setData, added, data} = useContext(ShoppingCartContext);

  useEffect(() => {
    fetchData().then((res) => setData(res));
  }, [setData]);

  const addToCart = (id) => {
    const selectElement = data.find((element) => element.id === id)
    setAdded((prevState) => [...prevState, selectElement]);
  };  

  return (
    <>
      <h1>Main articles</h1>
      <Cards>
        {data &&
          data.map((el) => {
            return (
              <Card key={el.id}>
                <p>{el.title}</p>
                <img src={el.image} alt={el.title}></img>
                <span>${el.price}</span>
                <button onClick={() => addToCart(el.id)}>Add to cart</button>
              </Card>
            );
          })}
      </Cards>
    </>
  );
}

export default Store;
  