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
            loader: () => fetch("https://brand-shop-server-side-k045thmoo-anfal11.vercel.app/brand"),
        },
        {
            path: "/addProduct",
            element: <PrivateRoute><AddProduct /></PrivateRoute>,
        },
        {
            path: "/myCart",
            element: <PrivateRoute><MyCart /></PrivateRoute>,
            loader: () => fetch(`https://brand-shop-server-side-k045thmoo-anfal11.vercel.app/myCart`)
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
            loader: ({params}) => fetch(`https://brand-shop-server-side-k045thmoo-anfal11.vercel.app/addProduct/${params.brand}`)
        },
        {
            path: "/updateProducts/:id",
            element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
            loader: ({params}) => fetch(`https://brand-shop-server-side-k045thmoo-anfal11.vercel.app/updateProduct/${params.id}`)
        },
        {
            path: "/detailsPage/:id",
            element: <PrivateRoute><DetailsPage /></PrivateRoute>,
            loader: ({params}) => fetch(`https://brand-shop-server-side-k045thmoo-anfal11.vercel.app/updateProduct/${params.id}`)
        }
    ]
    },
  ]);

export default Router;