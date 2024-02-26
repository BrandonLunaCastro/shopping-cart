
async function fetchArticle(id) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    return res.json()
}

export default fetchArticle