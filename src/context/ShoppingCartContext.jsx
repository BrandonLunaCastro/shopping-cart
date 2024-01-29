import { createContext, useState } from "react";

export const ShoppingCartContext = createContext(null);

export default function ShoppingProvider ({children}) {
  const [added, setAdded] = useState([]);
  const [data, setData] = useState([]);  

  return (
      <ShoppingCartContext.Provider value={{added, setAdded, data, setData}}>
        {children}  
      </ShoppingCartContext.Provider>             
    )
}
