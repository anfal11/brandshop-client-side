import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Root from "./Root";
import AddProduct from "../Pages/AddProduct";
import Login from "../Components/Login";
import Register from "../Components/Register";
import BrandWiseProduct from "../Components/BrandWiseProduct";
import UpdateProduct from "../Components/UpdateProduct";
import DetailsPage from "../Pages/DetailsPage";
import MyCart from "../Pages/MyCart";
import PrivateRoute from "./PrivateRoute";


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
            element: <PrivateRoute><AddProduct /></PrivateRoute>,
        },
        {
            path: "/myCart",
            element: <PrivateRoute><MyCart /></PrivateRoute>,
            loader: () => fetch(`http://localhost:5000/myCart`)
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
            element: <PrivateRoute><UpdateProduct /></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/updateProduct/${params.id}`)
        },
        {
            path: "/detailsPage/:id",
            element: <PrivateRoute><DetailsPage /></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/updateProduct/${params.id}`)
        }
    ]
    },
  ]);

export default Router;