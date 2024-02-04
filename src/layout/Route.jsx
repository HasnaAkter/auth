import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "./Main";
import Registration from "../pages/auth/Registration";
import Login from "../pages/auth/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "registration",
        element: <Registration></Registration>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
]);
