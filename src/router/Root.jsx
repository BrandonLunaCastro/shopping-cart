import {
  createBrowserRouter as Router,
  RouterProvider,
} from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "../components/Home";
import Store from "../components/Store";

function Root({
  added,
  setAdded,
  setData,
  data,
}) {
  const router = Router([
    {
      path: "/",
      element: (
        <NavBar
          added={added}
          setAdded={setAdded}
          data={data}
        />
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/store",
          element: (
            <Store
              setAdded={setAdded}
              added={added}
              setData={setData}
              data={data}
            />
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default Root;
