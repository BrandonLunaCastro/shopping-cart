import { useContext } from "react";
import styled from "styled-components";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

const Window = styled.article`
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
      padding-bottom: 1rem;
    }
  }
`;


const Table = styled.table`
  table-layout:fixed;
  border-collapse: collapse;
  width: 100%;
  border: 2px solid #66BFBF;
  text-align: center;
  vertical-align: middle;
  color: #333;
  margin-bottom: 16px;
  font-size: 1.2rem;

  .td-image{
    width: 70px;
    height: 70px;
  }

  thead {
    border-bottom: 2px solid #66BFBF;
    color: #fff;
    background-color: #66BFBF;
  }

  td:nth-child(4) {
    display: flex;
    justify-content: center;
    align-items: center;
    & > p {
      padding: 0 10px 0 10px;
    }
    & > button {
      background-color: #66BFBF;
      border: none;
      color: #EEEE;
      border-radius: 100%;
      font-size: 1.4rem;
      width: 2rem;
      height: 2rem;
      box-shadow: 0px 0px 4px #333;
      cursor: pointer;
    }
  }

  th, td {
    padding: 8px;
  }

  thead, th {
    width: 20%;
  }

`

const Delete = styled.button`
  background-color: #FF0063;
  width:6rem;
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
  background-color: #66BFBF;
  color: #fff;
  font-size: 1.2rem;
  box-shadow: 1px 1px 4px #333;
  cursor: pointer;
`;

function CartWindow() {
  const { added, handleMore, handleReduce, handleDelete, subTotal } =
    useContext(ShoppingCartContext);
  return (
    <Window>
      {added.length !== 0 ? (
        <Table>
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Price</th>
              <th>Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {added.map((art) => {
            return (
              <tr key={art.id} data-testid="article-card">
                <th>
                  <img src={art.image} alt={art.title} className="td-image"/>
                </th>
                <td className="title">{art.title}</td>
                <td className="price">${art.price.toFixed(2)}</td>
                <td>
                  <button onClick={() => handleMore(art.id)}>+</button>
                  <p data-testid={`amount-${art.id}`}>{art.amount}</p>
                  <button onClick={() => handleReduce(art.id)}>-</button>
                </td>
                <td>
                  <Delete onClick={() => handleDelete(art.id)}>Remove Item</Delete>
                </td>
                
              </tr>
            );
          })}
          </tbody>
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
