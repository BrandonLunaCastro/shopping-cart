export default function getPrice(arr, id) {
  const article = arr.find((el) => el.id === id);
  return article.price;
}
