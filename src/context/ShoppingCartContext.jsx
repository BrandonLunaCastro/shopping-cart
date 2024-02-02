import { createContext, useState } from "react";
import getPrice from "../services/getPrice";

export const ShoppingCartContext = createContext(null);

export default function ShoppingProvider ({children}) {
  const [added, setAdded] = useState([]);
  const [data, setData] = useState([]);  

  const addArticle = (element) => setAdded((prevState) => [...prevState, element]);

  const subTotal = added.reduce((acu, current) => {
    return (acu += current.price);
  }, 0);

  const handleMore = (id) => {
    const price = getPrice( data, id );
    const newState = added.map((art) => {
      if ( art.id === id ) {
        return {...art, price: art.price + price, mount: art.mount + 1 }
      }
      return art
    })
    setAdded(newState);
  } 

  const handleReduce = (id) => {
    const price = getPrice( data, id );
    const actualElement = added.find(el => el.id === id )

    if ( actualElement.price - price <= 0 ) {
      const stateFiltered = added.filter((element) => element.id != id )
      return setAdded(stateFiltered);
    }
    
    const newState = added.map((art) => {
      if ( art.id === id ) {
        return {...art, price: art.price - price, mount: art.mount - 1 }
      }
      return art
    })
    setAdded(newState);
  }

  const handleDelete = (id) => {
      const stateFilter = added.filter((art) => art.id !== id)
      setAdded(stateFilter);
  }

  return (
      <ShoppingCartContext.Provider value={{added, subTotal, handleMore, handleReduce, handleDelete,data, setData, addArticle}}>
        {children}  
      </ShoppingCartContext.Provider>             
    )
}
