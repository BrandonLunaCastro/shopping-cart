import { useContext } from "react";
import styled from "styled-components";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { Link } from "react-router-dom";

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
    color: #000;
    background-color: #F2EFE5;
  }

  td:nth-child(2) {
    text-transform: uppercase;

  }

  td:nth-child(4) {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #515151;
    border: 1px solid #F4EAE0;
    padding: 0;
    width: fit-content;
    & > p {
      padding: 0 10px 0 10px;
    }
    & > button {
      cursor: pointer;
      background: transparent;
      border: none;
      padding: 10px 15px;
      color: #515151;
    }
    & > :first-child {
      border-right: 1px solid #F4EAE0;
      height: max-content;
    }
    & > :last-child {
      border-left: 1px solid #F4EAE0;
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
  border-radius: 100%;
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid #cecece;
  color: #cecece;
  background-color: transparent;
  text-align: center;
  transition: all .3s ease-in;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    border: 1px solid #646464;
    color: #646464;
    font-weight: 700;
  }
`;

const Purchase = styled.button`
  width: 200px;
  height: 3rem;
  font-weight: 3rem;
  border: none;
  border-radius: 2px;
  background-color: #000000;
  color: #FAF6F0;
  font-size: 1.2rem;
  cursor: pointer;
`;

const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`


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
                  <Delete onClick={() => handleDelete(art.id)}>x</Delete>
                  <img src={art.image} alt={art.title} className="td-image"/>
                </th>
                <td className="title">{art.title}</td>
                <td className="price">${art.price.toFixed(2)}</td>
                <td>
                  <button onClick={() => handleMore(art.id)}>+</button>
                  <p data-testid={`amount-${art.id}`}>{art.amount}</p>
                  <button onClick={() => handleReduce(art.id)}>-</button>
                </td>
                
              </tr>
            );
          })}
          </tbody>
        </Table>
      ) : (
        <Empty>
          <p>The actual Cart is empty</p>
          <Link to="/store" >Go to shopping</Link>
        </Empty>
      )}
      {added.length !== 0 && (
        <div className="purchase-handling">
          <h1>Summary: </h1>
          <div>
            <p>Subtotal: ${subTotal.toFixed(2)}</p>
            
          </div>
          <Purchase>Purchase</Purchase>
        </div>
      )}
    </Window>
  );
}
//
export default CartWindow;
