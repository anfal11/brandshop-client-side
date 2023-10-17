import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Root from "./Root";


const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
            path: "/",
            element: <Home />,
        },
        {

        },
    ]
    },
  ]);

export default Router;