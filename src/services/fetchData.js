const URL = 'https://fakestoreapi.com/products/'

const fetchData = async (URL) => {
    const data = await fetch(URL,{mode:"cors"})
    const json = await data.json()
    return json;
}

export default fetchData;