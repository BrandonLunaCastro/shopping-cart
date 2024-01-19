const fetchData = async () => {
    const data = await fetch('https://fakestoreapi.com/products/')
    const json = await data.json()
    return json;
}

export default fetchData;