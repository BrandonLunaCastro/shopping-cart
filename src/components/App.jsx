import Root from "../router/Root";
import { useState } from "react";

function App() {
  const [added, setAdded] = useState([]);
  const [data, setData] = useState([]);

  return (
    <Root
      setAdded={setAdded}
      added={added}
      setData={setData}
      data={data}
    ></Root>
  );
}

export default App;
