import Root from "../router/Root";
import { createContext, useState } from "react";
import Home from "./Home";


const mainContext = createContext({})

function App() {
  const [added, setAdded] = useState([]);
  const [data, setData] = useState([]);

  return (
    <>
      <Root>
        <Home />
      </Root>
    </>
  );
}

export default App;
