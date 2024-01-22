import Root from "../router/Root";
import { useState } from "react";

function App() {
  const [articles, setArticles] = useState(0)
  const [ added, setAdded ] = useState([]);

  return <Root articles={articles} setArticles={setArticles} setAdded={setAdded} added={added}></Root>;

}

export default App;
