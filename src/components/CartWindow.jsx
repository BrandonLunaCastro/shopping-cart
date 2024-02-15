import { useContext } from "react";
import styled from "styled-components";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

const Window = styled.article`
  width: 500px;
  max-height: 500px;
  overflow-y: scroll;
  border: 1px solid gray;
  position: fixed;
  background-color: #333;
  color: white;
  right: 0;
  top: 3rem;
  padding: 15px;
`;

const ElementCart = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div > img {
    width: 15rem;
    height: 15rem;
  }
  & > div > div {
    text-align: center;
  }

  .price {
    font-size: 2rem;
    font-weight: 600;
  }

  .price-handling {
    display: flex;
    border: 1px solid gray;
    & > p {
      font-size: 1.5rem;
      width: 50px;
      text-align: center;
    }
    & > button {
      width: 50px;
    }
  }

  border: 1px solid white;
  gap: 15px;
`;

const Delete = styled.button`
  background-color: crimson;
  color: white;
  width: 8rem;
  height: 3rem;
`;

function CartWindow() {
  const { added, handleMore, handleReduce, handleDelete, subTotal } =
    useContext(ShoppingCartContext);
  return (
    <Window>
      {added.length !== 0 ? (
        added.map((art) => {
          return (
            <>
            <h2>Articles Added</h2>
            <ElementCart key={art.id} data-testid="article-cart">
              <div>
                <img src={art.image}></img>
                <div>
                  <p>{art.title}</p>
                  <p className="price">${art.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="price-handling">
                <button onClick={() => handleMore(art.id)}>+</button>
                <p data-testid={`amount-${art.id}`} >{art.mount}</p>
                <button onClick={() => handleReduce(art.id)}>-</button>
              </div>
              <Delete onClick={() => handleDelete(art.id)}>Remove Item</Delete>
            </ElementCart>
            </>
          );
        })
      ) : (
        <p>The actual Cart is empty</p>
      )}
      {added.length !== 0 && <p>SubTotal: ${subTotal.toFixed(2)}</p>}
    </Window>
  );
}
export default CartWindow;
