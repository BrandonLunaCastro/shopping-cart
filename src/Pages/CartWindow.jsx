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
  font-size: calc(20px + 0.2vw);
`;

const TableContainer = styled.div`
  max-width: 100%;
`;

const Table = styled.table`
  table-layout: fixed;
  border-collapse: collapse;
  width: 100%;
  text-align: center;
  vertical-align: middle;
  color: #333;
  margin-bottom: 16px;
  font-size: 1.2rem;

  .td-image {
    width: 70px;
    height: 70px;
  }

  thead {
    color: #000;
    background-color: #f2efe5;
  }

  td:nth-child(2) {
    text-transform: uppercase;
  }

  th,
  td {
    padding: 8px;
  }

  thead,
  th {
    width: 20%;
  }

  .article-card > td:first-child {
    display: flex;
    align-items: center;
    gap:25px;
      
  } 

  @media screen and (max-width: 630px) {
    font-size: 0.5rem;
  }
`;

const PurchaseHandling = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  color: #515151;
  border: 1px solid #f4eae0;
  padding: 0;
  width: fit-content;

  margin-left: auto;
  margin-right: auto;

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
    border-right: 1px solid #f4eae0;
    height: max-content;
  }
  & > :last-child {
    border-left: 1px solid #f4eae0;
  }
`;

const Delete = styled.button`
  border-radius: 100%;
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid #cecece;
  color: #cecece;
  background-color: transparent;
  text-align: center;
  transition: all 0.3s ease-in;
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
  border-radius: 5rem;
  background-color: #000000;
  margin-bottom: 10px;
  color: #faf6f0;
  font-size: 1.2rem;
  cursor: pointer;
`;

const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;
const Subtotal = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 40%;
  margin: 0 0 0 60%;

  & > p {
    font-size: 1rem;
    padding-bottom: 1rem;
  }

  .subtotal-title {
    background-color: #f2efe5;
    width: 100%;
    text-align: center;
  }

  & > div {
    padding: 10px;
  }

`;

function CartWindow() {
  const { added, handleMore, handleReduce, handleDelete, subTotal } =
    useContext(ShoppingCartContext);
  return (
    <Window>
      {added.length !== 0 ? (
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Price</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {added.map((art) => {
                return (
                  <tr key={art.id} data-testid="article-card" className="article-card">
                    <td>
                      <Delete onClick={() => handleDelete(art.id)}>x</Delete>
                      <img
                        src={art.image}
                        alt={art.title}
                        className="td-image"
                      />
                    </td>
                    <td className="title">{art.title}</td>
                    <td className="price">${art.price.toFixed(2)}</td>
                    <td>
                      <PurchaseHandling>
                        <button onClick={() => handleMore(art.id)}>+</button>
                        <p data-testid={`amount-${art.id}`}>{art.amount}</p>
                        <button onClick={() => handleReduce(art.id)}>-</button>
                      </PurchaseHandling>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </TableContainer>
      ) : (
        <Empty>
          <p>The actual Cart is empty</p>
          <Link to="/store">Go to shopping</Link>
        </Empty>
      )}
      {added.length !== 0 && (
        <Subtotal>
          <h1 className="subtotal-title">Total of Cart</h1>
          <div>
            <p>Summary: </p>
            <p>Subtotal: ${subTotal.toFixed(2)}</p>
          </div>
          <Purchase>Purchase</Purchase>
        </Subtotal>
      )}
    </Window>
  );
}
//
export default CartWindow;
