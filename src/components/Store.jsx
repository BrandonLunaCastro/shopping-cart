import { useContext, useEffect } from "react";
import fetchData from "../services/fetchData";
import styled from "styled-components";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { verifyElement } from "../services/verifyElement";

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
  gap: 10px;
  box-shadow: 0px 0px 5px #333;

  & > img {
    width: 8rem;
    height: 8rem;
    object-fit: contain;
  }

  .title {
    text-align: center;
  }

  .add__cart{
    background-color: #068FFF;
    color:  #EEEEEE;
    border: none;
    font-size: 1.2rem;
    width: 100%;
    height: 4rem;
    cursor: pointer;
  }

`;
function Store() {
  const { setData, added, data, addArticle } = useContext(ShoppingCartContext);

  useEffect(() => {
    fetchData().then((res) => setData(res));
  }, [setData]);

  const addToCart = (id) => {
    const selectElement = data.find((element) => element.id === id);
    selectElement.mount = 1;
    verifyElement(added, id)
      ? alert("is exist")
      : addArticle(selectElement);
  };

  return (
    <>
      <h1>Main articles</h1>
      <Cards>
        {data &&
          data.map((el) => {
            return (
              <Card 
                key={el.id}
                data-testid="articles-container"
              >                                 
                <p className="title"> {el.title}</p>
                <img src={el.image} alt={el.title}></img>
                <span>${el.price}</span>
                <button className="add__cart" onClick={() => addToCart(el.id)} name="add" data-testid={`btn-${el.id}`} >Add to cart</button>
              </Card>
            );
          })}
      </Cards>
    </>
  );
}

export default Store;
