import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./layout/Route";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <div className="max-w-full mx-auto">
      <RouterProvider router={router} />
    </div>
  </>
);
