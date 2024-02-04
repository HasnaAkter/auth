import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "./Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "home",
        element: <Home></Home>,
      },
    ],
  },
]);
