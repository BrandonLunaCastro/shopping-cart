import { useContext } from "react";
import styled from "styled-components";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

const Window = styled.article`
  width: 500px;
  max-height: 500px;
  overflow-y: scroll;
  border: 1px solid gray;
  position: fixed;
  background-color: #fff;
  color: #000;
  right: 0;
  top: 3rem;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

/* const ElementCart = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  & > div > img {
    width: 12rem;
    height: 12rem;
    display: block;
    margin: 0 auto;
  }
  & > div > div {
    text-align: center;
  }

  .title {
    font-size: 1.2rem;
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
`; */

const Table = styled.table`
  .td-image{
    width: 70px;
    height: 70px;
  }
`

const Delete = styled.button`
  background-color: crimson;
  width: 4rem;
  color: white;
  height: 3rem;
  border-radius: 5px;
  border: none;
`;

const Purchase = styled.button`
  width: 200px;
  height: 3rem;
  font-weight: 3rem;
`;

function CartWindow() {
  const { added, handleMore, handleReduce, handleDelete, subTotal } =
    useContext(ShoppingCartContext);
  return (
    <Window>
      {added.length !== 0 ? (
        <Table>
          {added.map((art) => {
            return (
              <tr key={art.id} data-testid="article-card">
                <td>
                  <img src={art.image} alt={art.title} className="td-image"/>
                </td>
                <td className="title">{art.title}</td>
                <td className="price">${art.price.toFixed(2)}</td>
                <td>
                  <button onClick={() => handleMore(art.id)}>+</button>
                </td>
                <td>
                  <p data-testid={`amount-${art.id}`}>{art.mount}</p>
                </td>
                <td>
                  <button onClick={() => handleReduce(art.id)}>-</button>
                </td>
                <td>
                  <Delete onClick={() => handleDelete(art.id)}>Remove Item</Delete>
                </td>
              </tr>
            );
          })}
        </Table>
      ) : (
        /*         added.map((art) => {
          return (
            <>
            <ElementCart key={art.id} data-testid="article-cart">
              <div>
                <img src={art.image}></img>
                <div>
                  <p className="title">{art.title}</p>
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
        }) */
        <p>The actual Cart is empty</p>
      )}
      {added.length !== 0 && (
        <>
          <p>Summary: ${subTotal.toFixed(2)}</p>
          <Purchase>Purchase</Purchase>
        </>
      )}
    </Window>
  );
}
export default CartWindow;
