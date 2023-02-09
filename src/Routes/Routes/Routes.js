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
        path: "/products/:id",
        element: (
          <PrivateRoute>
            <CategoryProduct></CategoryProduct>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          console.log(params.id);
          return fetch(`http://localhost:5000/products/category/${params.id}`);
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
            `https://assignment-12-server-nine-virid.vercel.app/bookings`
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
    path: "/buyer",
    element: <SellerLayOut></SellerLayOut>,
    children: [
      { path: "/buyer/addProduct", element: <AddProduct></AddProduct> },
      { path: "/buyer/myProduct", element: <MyProduct></MyProduct> },
    ],
  },
]);
