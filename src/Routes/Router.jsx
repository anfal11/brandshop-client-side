import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Root from "./Root";
import AddProduct from "../Pages/AddProduct";
import MyCart from "../Pages/MyCart";
import Login from "../Components/Login";
import Register from "../Components/Register";
import BrandWiseProduct from "../Components/BrandWiseProduct";
import UpdateProduct from "../Components/UpdateProduct";
import DetailsPage from "../Pages/DetailsPage";




const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
            path: "/",
            element: <Home />,
            loader: () => fetch("http://localhost:5000/brand"),
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
        {
            path: "/brandWise/:brand",
            element: <BrandWiseProduct />,
            loader: ({params}) => fetch(`http://localhost:5000/addProduct/${params.brand}`)
        },
        {
            path: "/updateProducts/:id",
            element: <UpdateProduct />,
            loader: ({params}) => fetch(`http://localhost:5000/updateProduct/${params.id}`)
        },
        {
            path: "/detailsPage/:id",
            element: <DetailsPage />,
            loader: ({params}) => fetch(`http://localhost:5000/updateProduct/${params.id}`)
        }
    ]
    },
  ]);

export default Router;