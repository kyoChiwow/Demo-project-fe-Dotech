import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import AllUsers from "../Pages/AllUsers/AllUsers";
import CreateUser from "../Pages/CreateUser/CreateUser";
import Details from "../Pages/Details/Details";
import Welcome from "../Pages/Welcome/Welcome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Welcome />,
      },
      {
        path: "/createUser",
        element: <CreateUser></CreateUser>,
      },
      {
        path: "/allUser",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "/details/:id",
        element: <Details />,
      },
    ],
  },
]);
