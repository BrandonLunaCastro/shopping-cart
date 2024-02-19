import { useContext } from "react";
import styled from "styled-components";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

const Window = styled.article`
  border: 1px solid gray;
  color: #000;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  .purchase-handling {
    display: flex;
    align-items: center;
    flex-direction: column;

    & > p {
      font-size: 1.4rem;
    }

  }

`;


const Table = styled.table`
  table-layout:fixed;
  border-collapse: collapse;
  width: 100%;
  .td-image{
    width: 70px;
    height: 70px;
  }

  td:nth-child(4) {
    display: flex;
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
  border: none;
  border-radius: 5px;
  background-color: #3abc;
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
                  <p data-testid={`amount-${art.id}`}>{art.mount}</p>
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
        <p>The actual Cart is empty</p>
      )}
      {added.length !== 0 && (
        <div className="purchase-handling">
          <p>Summary: ${subTotal.toFixed(2)}</p>
          <Purchase>Purchase</Purchase>
        </div>
      )}
    </Window>
  );
}
export default CartWindow;
