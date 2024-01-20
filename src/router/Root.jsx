import { createBrowserRouter as Router , RouterProvider } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "../components/Home"; 
import Store from "../components/Store";

function Root({articles, setArticles, added ,setAdded}) {
  const router = Router([
    {
      path:"/",
      element:<NavBar mount={articles} added={added}/>,
      children: [
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/store",
          element:<Store setArticles={setArticles} setAdded={setAdded} added={added}/>
        }
      ]
    }
  ])  
  return <RouterProvider router={router}></RouterProvider> 
}

export default Root