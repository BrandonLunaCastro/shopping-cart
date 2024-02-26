import {
  createBrowserRouter as Router,
  RouterProvider,
  useParams,
} from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "../Pages/Home";
import Store from "../Pages/Store";
import CartWindow from "../Pages/CartWindow";
import Product from "../components/Product";
import fetchArticle from "../services/fetchArticle";

function Root() {
  let { id } = useParams()
  console.log(id)
  const router = Router([
    {
      path: "/",
      element: (
        <NavBar />
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/store",
          element: (
            <Store />
          ),
        },
        {
          path: "store/:id",
          element: (
            <Product />
          ),
          loader: async ({params}) => {
            return await fetchArticle(params.id)
          }
        },
        {
          path: "/cart",
          element: <CartWindow />
        }
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default Root;
