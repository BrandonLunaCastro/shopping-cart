import { useContext } from "react";
import styled from "styled-components";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { Link } from "react-router-dom";
import { verifyElement } from "../services/verifyElement";

const SectionCards = styled.section`
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
  border: 1px solid #cecece;
  padding-top: 10px;
  height: 280px;
  color: #555;
  gap: 10px;
  overflow: hidden;

  img {
    width: 7rem;
    height: 7rem;
    object-fit: contain;
  }

  img:hover {
    object-fit: cover;
    object-position: center;
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

function Cards({ dataFilter, search }) {
  const { data, added, addArticle } = useContext(ShoppingCartContext);

  const addToCart = (id) => {
    const selectElement = data.find((element) => element.id === id);
    selectElement.amount = 1;
    verifyElement(added, id) ? alert("is exist") : addArticle(selectElement);
  };

  return (
    <SectionCards>
      {dataFilter &&
        dataFilter.map((el) => {
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
    </SectionCards>
  );
}

export default Cards;
