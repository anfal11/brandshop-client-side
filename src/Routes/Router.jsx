import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Root from "./Root";
import AddProduct from "../Pages/AddProduct";
import MyCart from "../Pages/MyCart";
import Login from "../Components/Login";
import Register from "../Components/Register";



const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
            path: "/",
            element: <Home />,
            loader: () => fetch("http://localhost:5000/brand")
        },
        {
            path: "/addProduct",
            element: <AddProduct />,
        },
        {
            path: "/myCart",
            element: <MyCart />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/register",
            element: <Register />,
        },
    ]
    },
  ]);

export default Router;