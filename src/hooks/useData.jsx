import { useContext, useEffect } from "react"
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import fetchData from "../services/fetchData";

function useData() {
    const {setData, data} = useContext(ShoppingCartContext)
    const URL = 'https://fakestoreapi.com/products/'
    useEffect(() => {
        fetchData(URL).then((res) => setData(res));
    }, [setData]);
    return { data }
}

export default useData