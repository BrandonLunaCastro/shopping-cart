import { useContext } from "react";
import styled from "styled-components";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

const Window = styled.article`
  max-width: 500px;
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
  & > div > img {
    width: 10rem;
    height: 10rem;
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
      <h2>Articles Added</h2>
      {added.length !== 0 ? (
        added.map((art) => {
          return (
            <ElementCart key={art.id} data-testid="article-cart">
              <div>
                <img src={art.image}></img>
                <p>{art.title}</p>
                <p>${art.price.toFixed(2)}</p>
              </div>
              <div>
                <button onClick={() => handleMore(art.id)}>+</button>
                <button onClick={() => handleReduce(art.id)}>-</button>
                <p data-testid={`amount-${art.id}`} >Amount: {art.mount} </p>
              </div>
              <Delete onClick={() => handleDelete(art.id)}>Remove Item</Delete>
            </ElementCart>
          );
        })
      ) : (
        <p>The actual Cart is empty</p>
      )}
      {added.length !== 0 && <p>SubTotal: ${subTotal}</p>}
    </Window>
  );
}
export default CartWindow;
