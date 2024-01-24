import Root from "../router/Root";
import { useState } from "react";

function App() {
  const [articles, setArticles] = useState(0);
  const [added, setAdded] = useState([]);
  const [data, setData] = useState([]);

  return (
    <Root
      articles={articles}
      setArticles={setArticles}
      setAdded={setAdded}
      added={added}
      setData={setData}
      data={data}
    ></Root>
  );
}

export default App;
