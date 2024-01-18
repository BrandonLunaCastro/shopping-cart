import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/Home/Home";
import Store from "../components/Store/Store";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path:"/store",
      element:<Store />
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
