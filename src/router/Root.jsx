import { createBrowserRouter as Router , RouterProvider } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "../components/Home"; 
import Store from "../components/Store";

function Root() {
  const router = Router([
    {
      path:"/",
      element:<NavBar />,
      children: [
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/store",
          element:<Store />
        }
      ]
    }
  ])  
  return <RouterProvider router={router}></RouterProvider> 
}

export default Root