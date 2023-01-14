import Blogs from "../../Pages/Blogs/Blogs";
import AddProduct from "../../Pages/BuyerLayOut/AddProduct/AddProduct";
import BuyerLayOut from "../../Pages/BuyerLayOut/BuyerLayOut/BuyerLayOut";
import MyProduct from "../../Pages/BuyerLayOut/MyProduct/MyProduct";
import CategoryProduct from "../../Pages/Home/Category/CategoryProduct/CategoryProduct";
import LogIn from "../../Pages/LogIn/LogIn";
import NotFound from "../../Pages/NotFound/NotFound";
import Orders from "../../Pages/Orders/Orders";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main/Main");
const { default: Home } = require("../../Pages/Home/Home");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      // {
      //   path: "/home",
      //   element: <Home></Home>,
      // },

      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/categories/:id",
        element: (
          <PrivateRoute>
            <CategoryProduct></CategoryProduct>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          console.log(params.id);
          return fetch(`http://localhost:5000/categories/${params.id}`);
        },
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/orders",
        element: <Orders></Orders>,
        loader: async () => {
          return fetch(`http://localhost:5000/bookings`);
        },
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
  {
    path: "/buyer",
    element: <BuyerLayOut></BuyerLayOut>,
    children: [
      { path: "/buyer/addProduct", element: <AddProduct></AddProduct> },
      { path: "/buyer/myProduct", element: <MyProduct></MyProduct> },
    ],
  },
]);
