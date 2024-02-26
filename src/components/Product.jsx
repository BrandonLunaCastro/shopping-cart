import { Link, useLoaderData } from "react-router-dom";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { useContext } from "react";
import styled from "styled-components";
import { verifyElement } from "../services/verifyElement";

const Figure = styled.figure`
  text-align: center;

  & > img {
    width: 400px;
    height: 400px;
    object-fit: contain;
    object-position: top;
  }
  & > p {
    text-align: center;
  }
`;

const MainSection = styled.figure`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;
const Description = styled.article`
  text-align: center;
  max-width: 600px;
  & > h1 {
    font-size: 2rem;
    padding: 10px;
  }
`;

const Handling = styled.div`
  display: flex;
  margin: 20px auto;
  align-items: center;
  justify-content: center;
  gap: 20px;
  & > * {
    display: block;
  }
  & > button {
    min-width: 8rem;
    min-height: 3rem;
    background-color: #66bfbf;
    color: #fff;
    border-radius: 5px;
    border: none;
    font-size: 1.2rem;
    box-shadow: 0 0 4px #333;
  }
  & > div > label {
    padding-right: 5px;
  }
`;

function Product() {
  const article = useLoaderData();
  const { addArticle, added } = useContext(ShoppingCartContext);
  const handleAdd = () => {
    const inputValue = document.getElementById("amount").value;

    if (verifyElement(added, article.id)) {
      alert("is exist");
    }
    if (!verifyElement(added, article.id)) {
      if (!inputValue) {
        article.amount = 1;
      } else {
        article.amount = parseInt(inputValue);
        article.price = article.price * article.amount;
      }
      addArticle(article);
    }
  };

  return (
    <>
      <MainSection>
        <Figure>
          <figcaption>{article.title}</figcaption>
          <img src={article.image}></img>
        </Figure>
        <div>
          <Description>
            <h1>Description</h1>
            <p>{article.description}</p>
          </Description>
          <Handling>
            <div>
              <label to="amount">Amount</label>
              <input
                type="number"
                name="amount"
                id="amount"
                min={1}
                max={10}
              ></input>
            </div>
            <button onClick={handleAdd}>Add to cart</button>
            <Link to="/store" className="go-back">Go back</Link>
          </Handling>
        </div>
      </MainSection>
    </>
  );
}

export default Product;
