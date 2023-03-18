import AllUser from "../../AdminDashboard/AllUser/AllUser";
import Blogs from "../../Pages/Blogs/Blogs";
import AddProduct from "../../Pages/SellerLayOut/AddProduct/AddProduct";
import SellerLayOut from "../../Pages/SellerLayOut/SellerLayOut/SellerLayOut";
import MyProduct from "../../Pages/SellerLayOut/MyProduct/MyProduct";
import CategoryProduct from "../../Pages/Home/Category/CategoryProduct/CategoryProduct";
import LogIn from "../../Pages/LogIn/LogIn";
import NotFound from "../../Pages/NotFound/NotFound";
import Orders from "../../Pages/Orders/Orders";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import FavByUsers from "../../FavByUsers/FavByUsers/FavByUsers";
// import { useContext } from "react";
// import { AuthContext } from "../../context/Auth/AuthProvider";
// const {user}=useContext(AuthContext)
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

      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/favorite",
        element: <FavByUsers></FavByUsers>,
      },
      {
        path: "/products/category/:categoryId",
        element: (
          <PrivateRoute>
            <CategoryProduct></CategoryProduct>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          console.log(params);
          return fetch(
            `https://assignment-12-server-nine-virid.vercel.app/products/category/${params?.categoryId}`
          );
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
        path: "/alluser",
        element: (
          <AdminRoute>
            {" "}
            <AllUser></AllUser>
          </AdminRoute>
        ),
      },
      {
        path: "/orders",
        element: <Orders></Orders>,
        loader: async () => {
          return fetch(
            `https://assignment-12-server-nine-virid.vercel.app/orders`
          );
        },
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
  {
    path: "/seller",
    element: <SellerLayOut></SellerLayOut>,
    children: [
      { path: "/seller/addProduct", element: <AddProduct></AddProduct> },
      { path: "/seller/myProduct", element: <MyProduct></MyProduct> },
    ],
  },
]);
